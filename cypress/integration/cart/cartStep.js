/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import CartPage from './cartPage';

Given('I visit home page', ()=> {  
    CartPage.visit()
})

When('I Click a item', () => {
    CartPage.item()
})

And('I click add to Cart', ()=> {
    CartPage.addcart()
})

And('I click navbar Cart', ()=> {
    CartPage.navbarcart()
})

And('I click place order', ()=> {
    CartPage.clickplaceorder()
})

And('I fill place order', ()=> {
    CartPage.fillPlaceOrder()
})


And('I click purchase', ()=> {
    CartPage.clickPurcase()
})

Then('I should see homepage', ()=> {
    cy.get('h2').should('contain.text', 'Thank you for your purchase!')
})

