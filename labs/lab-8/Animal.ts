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


export class Animal {
    protected name: string;
    protected speed: number;
    protected maxSpeed: number;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed();

    }
    public getRandomSpeed(): number {
        return (Math.floor(Math.random() * this.maxSpeed) + 1);
    }
    public Speed(): number {
        return this.speed;
    }
    public Name(): string {
        return this.name;
    }
    /*     public setName(name: string): void {
            this.name = name;
        } */
/*     public getmaxSpeed(): number {
        return this.maxSpeed;
    }
    public setmaxSpeed(maxSpeed: number): void {
        this.maxSpeed = maxSpeed;
    } */


}

