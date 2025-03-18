import LoginPage from "./LoginPage";
export default class LoginTestFlow {
    // set static de call truc tiep class ben trang logintestPage.ts
    public static login(loginPage: LoginPage, username: string, password: string): void {
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginButton();
    }
}