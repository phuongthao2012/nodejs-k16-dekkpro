// child class/sub class/derived class
// overriding : different class and inside the child class, the chils class has method that inheritance from the parent class and override the method of the parent class
// 
const Request = require('./Request.js');
class GetRequest extends Request{
    
    // class variable
    // static is created before the object is created
    static id=1;
    // override the method of the parent class
    setMethod(){
        super.setMethod('GET');
    }
    myNewMethod(){
        console.log('This is my new method');
    }


    static doSomething(){
        console.log(GetRequest.id);
        console.log('This is class method from the child class');
    }

}
let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.myNewMethod();
