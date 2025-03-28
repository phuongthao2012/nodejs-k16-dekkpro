/**
 * ****************************
 * Credit: Nguyen Thinh Khang (Dev), in Selenium K1 for contributing the exercise.

This is the first simple version racing contest problem.
Racing animal simple version*
When an animal was born, it will have a random speed with below info

Horse: Max 75 km/h
Tiger: Max 100 Km/h
Dog: Max 60 KM/h*
Create an Animal class with a method getSpeed() which return animal's speed
Create 3 objects for those 3 animal type
Run and see which animal is winner for racing
Print result with format: Winner is <Animal name>, with speed: <speed>
Ex: const randomNumber = Math.floor(Math.random() * 100) + 1;
 * ****************************
 */


export default class Animal {
    protected name: string;
    protected speed: number;
    // protected maxSpeed: number;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        // this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed(maxSpeed);

    }
    private getRandomSpeed(maxSpeed : number): number {
        return (Math.floor(Math.random() * maxSpeed) + 1);
    }
    public getSpeed(): number {
        return this.speed;
    }
    public getName(): string {
        return this.name;
    }

}

