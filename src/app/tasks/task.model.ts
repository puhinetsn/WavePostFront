export interface IAddress {
    departmentId: number; 
    departmentAdress: string;
}
  
// export interface IAssignmentsInfo {
//     id: number;
//     taskName: string;
//     workers: IWorker[]; 
//     duration: number;
//     payment: number;
//     startDate: Date;
//     executorsQty: number;

//     getEndDate(): Date; 
// }

export interface IAssignmentsInfo {
        id: number;
        taskName: string;
        worker: string;
        duration: number;
        payment: number; 
}

export interface IAssignment {
    name: string;
    description: string;
    duration: number;
    payment: number;
}

export interface IWorker {
    firstName: string;
    lastName: string;
    middleName: string;
    position: string;
    rate: number;
}

export class Address implements IAddress {
    departmentId: number;
    departmentAdress: string;

    constructor(departmentId: number, departmentAdress: string){
        this.departmentId = departmentId;
        this.departmentAdress = departmentAdress;
    }

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


