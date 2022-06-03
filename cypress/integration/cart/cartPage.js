const URL = 'https://www.demoblaze.com/index.html'
const NAME = '#name'
const COUNTRY = '#country'
const CITY = '#city'
const CARD = '#card'
const MONTH = '#month'
const YEAR = '#year'


class CartPage{
    static visit() {
        cy.visit(URL)
    }

    static item() {
        cy.get('.card-block').contains('Samsung galaxy s6').click()
    }

    static addcart() {
        cy.contains('Add to cart').click()
    }

    static navbarcart() {
        cy.get('.navbar-nav').contains('Cart').click()
    }

    static clickplaceorder() {
        cy.contains('Place Order').click()
    }
    
    static fillPlaceOrder() {
        cy.get(NAME).type('Nama')
        cy.get(COUNTRY).type('country')
        cy.get(CITY).type('city')
        cy.get(CARD).type('card')
        cy.get(MONTH).type('month')
        cy.get(YEAR).type('YEAR')
    }

    static clickPurcase() {
        cy.get('.modal-footer').contains('Purchase').click()
    }
}

export default CartPage