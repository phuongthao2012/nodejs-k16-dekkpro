import Animal from "./Animal";
export default class AnimalRacingController{
    static getWiner(animalList: Animal[]): Animal{
        let winner= animalList[0];
        for(const animal of animalList){
            if(animal.getSpeed() > winner.getSpeed()){
                winner = animal;
            }
        }
        return winner;
    }
}