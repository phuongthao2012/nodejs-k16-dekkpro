import Person from "./Person";

export default class Teo extends Person {
  setAge(age: number): void {
    if (age < 18) {
      throw new Error("Teo is not allowed to have less than 18 years old");
    }
    this.age = age;
  }
}
