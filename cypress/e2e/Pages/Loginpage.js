export class Loginpage{

    username_textbox = '[data-test="username"]'
    password_textbox = '[data-test="password"]'
    login_button = '[data-test="login-button"]'

    enterusername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterpassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clicklogin(){
        cy.get(this.login_button).click() 
    }
}