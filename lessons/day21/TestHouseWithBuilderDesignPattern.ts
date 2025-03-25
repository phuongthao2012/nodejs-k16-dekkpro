
import House from "./HouseWithBuilderDesignPattern";
// let builder: HouseWithBuilderDesignPattern = new House.Builder();
let builder= new House.Builder();
let house: House = builder
                        .setTopRoofColor("Red")
                        .setWindowNumber(10)
                        .setColor("White")
                        .setMainDoorNumber(2)
                        .build();
                        