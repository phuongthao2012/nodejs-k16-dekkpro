/**
 * ****************************
 * Object Small Exercise
 * ****************************
 */
const teo = { name: 'Teo', grades: [9, 8, 6] };
// copy teo to ti
const ti = JSON.parse(JSON.stringify(teo));
ti.name = 'Ti';
ti.grades = [9, 8, 9];
const tun = JSON.parse(JSON.stringify(teo));
tun.name = 'Tun';
tun.grades = [10, 9, 5];
const bestStudentInfo = findBestStudent([teo, ti, tun]);
console.log(bestStudentInfo);

// gan 1 bien voi cau truc de hoisting tu function bestStudent
const { bestStudent, averageScore } = bestStudentInfo;
console.log(`the best student is ${JSON.stringify(bestStudentInfo.bestStudent.name)} voi diem trung binh la ${JSON.stringify(bestStudentInfo.currentHighestScore)}`);

// function voi tham so dau vao la 1 mang hoc sinh
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighestScore = 0;
    // lay tung gia tri cua mang khong thay doi gia tri
    for (const student of students) {
        // goi function de tim diem trung binh cua tung hoc sinh
        const averageScore = calculateAverageScore(student.grades);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    
        return {
            bestStudent,
            currentHighestScore
        };
    
}

function calculateAverageScore(grades) {
    let total = 0;
    for (const grade of grades) {
        // total = total + grade;
        // same
        total += grade;
    }
    return (total / grades.length).toFixed(2);
}

