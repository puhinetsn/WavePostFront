export interface IAddress {
  _id: number;
  departmentAddress: string;
}

export interface IAssignment {
  _id: string;
  name: string;
  payment: number;
}

export interface IWorker {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  position: string;
  rate: number;
  departmentId: number;
  email: string;
  bonus: number;
}

export interface ILogInUser {
  email: string;
  password: string;
}

export interface IAuthResult {
  message: string;
}

export interface IWorkerInfo {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAssignmentsInfo {
  _id: string | null;
  type: IAssignment;
  workers: IWorkerInfo[];
  duration: number;
  startDate: Date;
  exequtorsQty: number;
  departmentId: number;
  description: string;

  getEndDate(): Date;
}

export class AssignmentsInfo implements IAssignmentsInfo {
  _id: string | null;
  type: IAssignment;
  workers: IWorkerInfo[];
  duration: number;
  startDate: Date;
  exequtorsQty: number;
  departmentId: number;
  description: string;

  constructor(
    id: string | null,
    type: IAssignment,
    workers: IWorkerInfo[],
    duration: number,
    startDate: Date,
    exequtorsQty: number,
    departmentId: number,
    description: string
  ) {
    this._id = id;
    this.type = type;
    this.workers = workers;
    this.duration = duration;
    this.startDate = startDate;
    this.exequtorsQty = exequtorsQty;
    this.departmentId = departmentId;
    this.description = description;
  }

  getEndDate(): Date {
    const endDate = new Date(this.startDate);
    endDate.setDate(endDate.getDate() + this.duration);
    return endDate;
  }
}

export interface Page<Type> {
  res: Type[];
  hasNext: boolean;
}
