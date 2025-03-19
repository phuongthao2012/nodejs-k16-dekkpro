export default class Animal {
    protected name: string;
    protected speed: number;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed);
    }
    public getSpeed(): number {
        return this.speed;
    }

    public getName(): string {
        return this.name;
    }
}
