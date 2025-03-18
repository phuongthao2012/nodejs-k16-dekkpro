"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginTestFlow_1 = require("./LoginTestFlow");
var InternalLoginPage_1 = require("./InternalLoginPage");
var ExternalLoginPage_1 = require("./ExternalLoginPage");
var internalLoginPage = new InternalLoginPage_1.default();
var externalLoginPage = new ExternalLoginPage_1.default();
var internalLoginData = {
    username: "teo",
    password: "12345"
};
var externalLoginData = {
    username: "ti",
    password: "12345"
};
/* const loginTestFlow = new LoginTestFlow();
loginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
loginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password); */
LoginTestFlow_1.default.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow_1.default.login(externalLoginPage, externalLoginData.username, externalLoginData.password);
