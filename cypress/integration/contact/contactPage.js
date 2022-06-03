const URL = 'https://www.demoblaze.com/index.html'
const CTC = 'Contact'
const EMAIL = '#recipient-email'
const NAME = '#recipient-name'
const MESSAGE = '#message-text'
const SEND = 'Send message'

class ContactPage{
    static visit() {
        cy.visit(URL)
        cy.get('.navbar-nav').contains(CTC).click()
    }

    static fillEmail(email) {
        cy.get(EMAIL).clear()
        cy.get(EMAIL).type(email)
    }

    static fillName(name) {
        cy.get(NAME).clear()
        cy.get(NAME).type(name)
    }

    static fillMessage(message) {
        cy.get(MESSAGE).clear()
        cy.get(MESSAGE).type(message)
    }

    static send() {
        cy.contains(SEND).click()
    }
}

export default ContactPage