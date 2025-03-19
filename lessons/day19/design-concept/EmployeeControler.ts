import Employee from "./Employee";
export default class EmployeeController {
    static getTotalSalary(employeeList: Employee[]): number { //neu khong  return thi la undefined, neu co return thi phai define value tra ve la number
        let totalSalary: number = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.getsalary()+employee.getbonus();
        }
        return totalSalary;
    }


}