import { Robot } from "./Robot";
class DogRobot extends Robot{
    // muon override CLASS VARIABLE tu lop cha thi cung phai dung  tu khoa static
    // static duoc tao ra truoc khi object duoc tao ra
    static {
        this.id =100;
    }
    // vi lop cha co thuoc tinh static la ID ma lai co them method getId() dang su dung static nen lop con muon su dung ham nay cung phai override lai
    getId(): number {
        return DogRobot.id;
    }
}
const lulu = new DogRobot();// o truong hop nay, no se goi de khoi tao ID cua class la 100 sau do tao doi tuong voi Robot co ID la 1 again
console.log(lulu.getId());
