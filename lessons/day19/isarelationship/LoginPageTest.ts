import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";
import InternalLoginPage from "./InternalLoginPage";
import ExternalLoginPage from "./ExternalLoginPage";

let internalLoginPage: LoginPage = new InternalLoginPage();
let externalLoginPage: LoginPage = new ExternalLoginPage();
let internalLoginData = {
    username: "teo",
    password: "12345"
}
let externalLoginData = {
    username: "ti",
    password: "12345"
}
/* const loginTestFlow = new LoginTestFlow();
loginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
loginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password); */

LoginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password);

