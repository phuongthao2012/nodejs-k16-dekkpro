export class Robot {
    static id = 0; //CLASS VARIABLE 1 khi da dung, tuc la SHARE VALUE cho 1 cai khuon, khi tao cac instance goi la doi tuong,
    // thi gia tri constructor luc nay duoc dung chung cho tat ca cac instance
constructor(){
    // moi lan khoi tao robot thi ID se tang len 1 don vi
    Robot.id++;
}
getId(): number{
    return Robot.id;
}
}
const lulu = new Robot();
// console.log(lulu.getId());
const meomeo = new Robot();
console.log(lulu.getId());
console.log(meomeo.getId());
// npx tsx : chay nhanh ma khong bao loi
// muon chay ma co bao loi phai chay tsc then node js