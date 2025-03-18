import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {
    private usernameSel = "#int-username";
    private passwordSel = "#int-password";
    private loginButtonSel = "#int-loginBtn";

    public inputUsername(username: string): void {
        console.log(`Input username: ${username} for selector: ${this.usernameSel}`);

    }
    public inputPassword(password: string): void {
        console.log(`Input password: ${password} for selector: ${this.passwordSel}`);

    }
    public clickOnLoginButton(): void {
        console.log(`Click on login button for selector: ${this.loginButtonSel}`);
    }
}