// Parent class or super class or base class
class Request{
    // header: default parameter, default key header cho la 1 object rong
    constructor(url,header ={id: 'thao'}){
        this.url = url;
        this.header = header;
        this.method = '';

    }
    setUrl(url){
        this._url = url;
    }
    setMethod(method){
        // shadow copy : ... lay cai header hien tai, set them du lieu moi vao
        this.header={...this.header,method: method};
    }


    sendRequest(){
        console.log(`Sending request with the header: ${JSON.stringify(this.header)}`); 
        
    }
    verifyResponse(){
        console.log(`Verifying response ...`);
    }
}
module.exports = Request;