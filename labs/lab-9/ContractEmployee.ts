import Employee from "./Employee";
export default class ContractEmployee extends Employee {
    maxSalary(): number {
        return 40000;
    }

    getType(): string {
        return 'Contract Employee';
    }
}
/* let contractEmp = new ContractEmployee("ti", 300*1000);
contractEmp.salary;
console.log(`ti: ${contractEmp.salary}$`); */