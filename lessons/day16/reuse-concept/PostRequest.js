// child class/sub class/derived class
// overriding : different class and inside the child class, the chils class has method that inheritance from the parent class and override the method of the parent class
// 
const Request = require('./Request.js');
class PostRequest extends Request{

    // override the method of the parent class
    setMethod(){
        super.setMethod('POST');
    }
    myNewMethod(){
        console.log('This is my new method');
    }

}
let postRequest = new PostRequest();
postRequest.setMethod();
postRequest.sendRequest();
postRequest.verifyResponse();
postRequest.myNewMethod();
