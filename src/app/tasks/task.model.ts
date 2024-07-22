

export interface IAddress {
    departmentId: number; 
    departmentAddress: string;
}
  
export interface IAssignmentsInfo {
    id: number;
    taskName: string;
    workers: IWorker[]; 
    duration: number;
    payment: number;
    startDate: Date;
    executorsQty: number;
    departmentId: number;

    getEndDate(): Date; 
}



export interface IAssignment {
    name: string;
    description: string;
}

export interface IWorker {
      firstName: string;
      lastName: string;
      middleName: string;
      position: string;
      rate: number;
      email: string;
      bonus: number;
}

export class Address implements IAddress {
    departmentId: number;

    constructor(departmentId: number, departmentAdress: string){
        this.departmentId = departmentId;
        this.departmentAddress = departmentAdress;
    }
    departmentAddress: string;

}

export class Assignment implements IAssignment {
    id: number;
    name: string;
    description: string;
    duration: number;
    payment: number;

    constructor(id: number, name: string, description: string, duration: number, payment: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.payment = payment;
    }
}

export class AssignmentsInfo implements IAssignmentsInfo {
    id: number;
    taskName: string;
    workers: IWorker[];
    duration: number;
    payment: number;
    startDate: Date;
    executorsQty: number;
    departmentId: number;

    constructor(
        id: number,
        taskName: string,
        workers: IWorker[],
        duration: number,
        payment: number,
        startDate: Date,
        executorsQty: number,
        departmentId: number
    ) {
        this.id = id;
        this.taskName = taskName;
        this.workers = workers;
        this.duration = duration;
        this.payment = payment;
        this.startDate = startDate;
        this.executorsQty = executorsQty;
        this.departmentId = departmentId
    }

    getEndDate(): Date {
        const endDate = new Date(this.startDate);
        endDate.setDate(endDate.getDate() + this.duration);
        return endDate;
    }
}

export class Worker implements IWorker{
    firstName: string;
    lastName: string;
    middleName: string;
    position: string;
    rate: number;
    email: string;
    bonus: number;

    constructor(
        firstName: string,
        lastName: string,
        middleName: string,
        position: string,
        rate: number,
        email: string,
        bonus: number
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.position = position;
        this.rate = rate;
        this.email = email;
        this.bonus = bonus;
    }
}


