/// <reference types="cypress" />
import {Given, When, And,  Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from './loginPage';

Given('I open login page', () =>  {
    LoginPage.visit()
})

When('I type username', () => {
    LoginPage.fillUsername('username')                    
});

And('I type password', () => {
    LoginPage.fillPassword('password')
})

And('I clicks on the button login', () => {
    LoginPage.signIn() 
})

Then('I should see homepage', () => {
    cy.get('a').should('contain.text', 'Welcome username')
})