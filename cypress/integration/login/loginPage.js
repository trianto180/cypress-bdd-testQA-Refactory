const URL = 'https://www.demoblaze.com/index.html'
const USERNAME = '#loginusername'
const PASSWORD = '#loginpassword'
const SIGN_IN = 'Log in'

class LoginPage{
    static visit() {
        cy.visit(URL)
        cy.get('#login2').click()
    }

    static fillUsername(username) {
        cy.get(USERNAME).clear()
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password){
        cy.get(PASSWORD).clear()
        cy.get(PASSWORD).type(password)
    }

    static signIn() {
        cy.get('.modal-footer').contains(SIGN_IN).click()
    }
}

export default LoginPage