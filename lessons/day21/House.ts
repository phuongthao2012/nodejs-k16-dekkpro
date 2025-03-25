// Require: Immutable object -> tao ra thi khong thay doi nua
//Variant instance: thay doi duoc
export default class House {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;
    constructor(topRoofColor: string, windowNumber: number, color: string, mainDoorNumber: number) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoorNumber = mainDoorNumber;
    }
    //GETTER
    getTopRoofColor() {
        return this.topRoofColor;
    }
    getWindowNumber() {
        return this.windowNumber;
    }
    getColor() {
        return this.color;
    }
    getMainDoorNumber() {
        return this.mainDoorNumber;
    }
    //SETTER
    setTopRoofColor(topRoofColor: string) {
        this.topRoofColor = topRoofColor;
    }
}
let teoHouse = new House("Red", 10, "white", 2);
let tiHouse = new House("Blue", 15, "Black", 3);

