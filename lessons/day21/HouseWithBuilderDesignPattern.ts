//Outer class
export default class HouseWithBuilderDesignPattern {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;
    private constructor() {

    }
    //GETTER READ ONLY
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
    //Sale Department - Inner Class -Write ONLY
    //Use Builder Design Pattern then inner class should named: Builder
    public static Builder = class {
        private house: HouseWithBuilderDesignPattern; // ban hop dong
        //hoi khach hang tung thuoc tinh 1 truoc khi ky hop dong
        public setTopRoofColor(topRoofColor: string): this { // tra ve lai chinh doi tuong da tao ra no, tuc la tra ve builder
            this.house.topRoofColor = topRoofColor;
            return this;
        }
        public setWindowNumber(windowNumber: number): this {
            this.house.windowNumber = windowNumber;
            return this;
        }
        public setColor(color: string): this {
            this.house.color = color;
            return this;
        }
        public setMainDoorNumber(mainDoorNumber: number): this {
            this.house.mainDoorNumber = mainDoorNumber;
            return this;
        }
        //Sign the contract
        public build(): HouseWithBuilderDesignPattern {
            return this.house;
        }

    }
}
