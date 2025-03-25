export default class Person {
    protected name: string;
    protected age: number = 0; // Khởi tạo giá trị mặc định

    constructor(name: string) {
        // this.validateAge(age);
        this.name = name;
        // this.age = age;
    }

    // Getter cho age
    public getAge(): number {
        return this.age;
    }
    // service method: method public for outside to use
    protected setAge(age: number): void {
        this.validateAge(age);
        this.age = age;
        /*         if (age < 0) {
                    throw new Error("Age must be greater than 0");
                }
                this.age = age; */
    }
    // support method inside the class
    private validateAge(age: number): void {
        if (age < 0) {
            throw new Error("Age must be greater than 0");
        }
    }
}
