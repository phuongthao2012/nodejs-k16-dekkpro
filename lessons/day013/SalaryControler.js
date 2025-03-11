"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryControler = void 0;
// co 1 controller de xu ly cac doi tuong
// gom nhom lai tat ca cac tac vu lien quan den properties cua 1 hoac nhieu Employee, ket noi cac doi tuong Employee
var SalaryControler = /** @class */ (function () {
    function SalaryControler() {
    }
    // dung default constructor khong co doi so
    // FP : xay dung huong ham
    SalaryControler.prototype.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary = totalSalary + employee.salary;
            // totalSalary += employee.salary;
        }
        return totalSalary;
    };
    return SalaryControler;
}());
exports.SalaryControler = SalaryControler;
