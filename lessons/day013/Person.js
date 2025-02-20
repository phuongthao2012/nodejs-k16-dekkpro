// Class is a template/blueprint for creating objects
// Class start with capital letter
// Build a class matches name with file name
//Class is a template for creating objects. It encapsulates data for the object.
class Person {
    // need write properties instant
    // key is constructor, ONLY one constructor
    // constructor is a special method for creating and initializing an object created with a class.

    // truyen gia tri name va tuoi khi truyen revoke constructor
    // cac properties phai co _ de tach bach voi setter va getter va khong goi vong lap vo tan
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // getter duoc sinh ra de tra ve gia tri noi tai, khong de thay doi gia tri noi tai
    // tat ca method trong object la 1 function nhung khong co chu function
    /*     getName() {
            return this._name;
        } */
    get name() {
        return this._name;
    }
    // setter
/*     setName(name) {
        this._name = name;
    } */

    set name(name) {
        this._name = name;
    }

}
// yeu cau constructor tao 1 thuc the ten Teo
let teo = new Person("Teo", 18);//Invoke the consctructor to initial an object from class ~ template
// teo.setName("Teo Nguyen");
teo.name = "Teo Nguyen2";
// let name = teo.getName();
// khong phai la teo._name
let name = teo.name;
console.log(name);



// WebDriver Protocal:selenium, Appium, WebdriverIO
// DevTool Protocal: Cypress, Playwright