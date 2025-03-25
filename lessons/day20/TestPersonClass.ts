// Importing the Person class
import Person from "./Person";
import Teo from "./Teo";

// 
/* const teo = new Person("Teo");
teo.setAge(20);
console.log(teo);

// error because access modifier from Person is protected  */
const teo = new Teo("Teo"); 
teo.setAge(20);
console.log(teo);

// There is a need that Fev needs to validate data validity
// Encapsulation: Limiting access to properties/methods within a class: tinh bao dong, han che quyen truy cap cho cac thuoc tinh/ phuong thuc trong 1 class
// Need to validate data validity

// Access Modifiers: private, protected, public (conceptual in JS) ~ Pham vi truy cap
// Access modifier in Java: private, default (package-private), protected, public and we have 8 type of data and 8 ways for access a fields
// normal class : all props are private , method: service method, support method
// class that is a template for IS-A relationship: almost of the object props are methods  are protected,
