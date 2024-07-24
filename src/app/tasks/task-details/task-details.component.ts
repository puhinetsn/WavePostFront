import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AssignmentsInfo, IAddress, IAssignment, IWorker} from '../task.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskServiceService} from '../../services/task-service.service';
import {TasksApiService} from '../../services/tasks-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {log} from "node:util";
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  selectedValue: IAddress | undefined;
  public addresses$: Observable<IAddress[]> = this.tasksService.addresses$;
  public assignmentName: string = '';
  public payment: number = 0;
  public allWorkers: IWorker[] = [];
  private id: string | null = null;
  form!: FormGroup;

  constructor(
    private crud: TasksApiService,
    private tasksService: TaskServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit(): void {
   
      this.id = this.route.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      type: [{}],
      workers: [[]],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      exequtorsQty: [1, Validators.required],
      department: [null, Validators.required],
      description: ['', Validators.required]
    });
    if (isPlatformBrowser(this.platformId)) {
      if (this.id) {
        this.crud.getAllDepartments().subscribe((res: IAddress[]) => {
        this.tasksService.setAddresses(res);
      });

      this.crud.getTaskById(this.id).subscribe((res: IAssignment) => {
        this.assignmentName = res.name;
        this.payment = res.payment;
        this.form.patchValue({type: res});
      });
      } else {
      console.error('No ID found in route');
      }
    }
    
  }

  setWorkers(workers: IWorker[]) {
    this.form.patchValue({workers: workers});
  }

  onDepartmentChange(selectedDepartment: IAddress): void {
    this.selectedValue = selectedDepartment;
    this.crud.getAllDeptWorkers(selectedDepartment._id).subscribe((res: IWorker[]) => {
      this.allWorkers = res;
      this.form.patchValue({department: selectedDepartment});
    });
  }

  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      if (formData.workers.length !== formData.exequtorsQty) {
        alert('The amount of assigned workers must be the same as number of performers');
        return;
      }

      const duration = (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24);
      const assignmentInfo = new AssignmentsInfo(null, formData.type, formData.workers,
        duration, formData.startDate, formData.exequtorsQty, formData.department, formData.description);
      this.crud.addNewAssignment(assignmentInfo).subscribe(res =>
        console.log(res));
    } else {
      console.error('Form is invalid');
    }
  }
}
