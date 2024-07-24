import {Component, OnInit} from '@angular/core';
import {TasksRedirectService} from "../../services/tasks-redirect.service";
import {Router} from '@angular/router';
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";


@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.css']
})
export class TaskMainComponent implements OnInit {
  constructor(
    private router: Router,
    private redirectService: TasksRedirectService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.redirectService.redirect(this.router);
    }
  }
}
