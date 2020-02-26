abstract class Employee {
  constructor(protected _name: string, protected _salary: number) {}
  abstract get name(): string;
  abstract get salary(): number;
  abstract set salary(salary: number);
  abstract get roles(): string[];
}
export class Developer extends Employee {
  protected _roles: string[] = [];
  constructor(protected _name: string, protected _salary: number) {
    super(_name, _salary);
  }
  get name() {
    return this._name;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary: number) {
    this._salary = salary;
  }
  get roles() {
    return this._roles;
  }
}
export class Designer extends Employee {
  protected _roles: string[] = [];
  constructor(protected _name: string, protected _salary: number) {
    super(_name, _salary);
  }
  get name() {
    return this._name;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary: number) {
    this._salary = salary;
  }
  get roles() {
    return this._roles;
  }
}
export class Organization {
  protected _employees: Employee[] = [];
  set employee(employee: Employee) {
    this._employees.push(employee);
  }
  getNetSalaryes(): number {
    let netSalary = 0;
    for (const employee of this._employees) {
      netSalary += employee.salary;
    }
    return netSalary;
  }
}
