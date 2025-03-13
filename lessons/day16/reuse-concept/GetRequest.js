// child class/sub class/derived class
// overriding : different class and inside the child class, the chils class has method that inheritance from the parent class and override the method of the parent class
// Class la khuon lam banh, con object la cai banh
const Request = require('./Request.js');
class GetRequest extends Request {

    // constructor
    constructor(url, method = 'GET') {
        // CHI CONSTRUCTOR muon override the method of the parent class, we need to call the super() trong inheristance
        super();
        this._url = url;
        super.setMethod(method);
    }

    // class variable
    // static is created before the object is created, static do not allow to access from the instance of the class
    static id = 1; //if no static it's global variable muon truy cap static phai thong qua 1 class
    // override the method of the parent class
    setMethod() {
        super.setMethod('GET');
    }
    myNewMethod() {
        // console.log(id);
        console.log(GetRequest.id);
        
        console.log('This is my new method');
    }

/*     doSomething1() {
        // console.log(GetRequest.id);
        // mot method non-static khong the truy cap 1 bien static duoc, phai thong qua 1 class
        console.log(id);
        console.log('This is class method from the child class');
    } */
    static doSomething() {
        // console.log(GetRequest.id);
        // mot method non-static khong the truy cap 1 bien static duoc, phai thong qua 1 class
        // console.log(id);// van bi bao bug
        console.log(GetRequest.id);
        
        
        console.log('This is class method from the child class');
    }

}
let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.myNewMethod();
// getRequest.doSomething1();
// getRequest.doSomething(); // Cần gọi doSomething() thông qua tên lớp (GetRequest) thay vì một instance:
// khi goi static phai call thong qua Class chu khong phai instance
GetRequest.doSomething();
// console.log(GetRequest.id);

