// co 1 controller de xu ly cac doi tuong
// gom nhom lai tat ca cac tac vu lien quan den properties cua 1 hoac nhieu Employee, ket noi cac doi tuong Employee

class SalaryControler {
    // dung default constructor khong co doi so
    // FP : xay dung huong ham
    getTotalSalary(employeeList) {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.salary;
            // totalSalary += employee.salary;

        }
        return totalSalary;
    }

}
module.exports = SalaryControler;