export default class Person {
    private name: string;
    private age: number = 0; // Khởi tạo giá trị mặc định

    constructor(name: string, age: number) {
        // this.validateAge(age);
        this.name = name;
        this.age = age;
    }

/*     // Getter cho age -> read only
    public getAge(): number {
        return this.age;
    }
    public getName(): string {
        return this.name;
    }
 */
    // Setter cho age, name -> write only
    public setAge(age: number): void {
        this.age = age;
    }
    public setName  (name: string): void {
        this.name = name;
    }
}
// teo is immutable object -> READ ONLY
const teo = new Person("Teo", 20);
console.log(teo);
teo.setAge(21);
console.log(teo);
