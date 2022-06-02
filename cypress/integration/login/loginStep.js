/// <reference types="cypress" />
import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from './loginPage';

Given('I open login page', () =>  {
    LoginPage.visit()
})

When('I Submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn()                     
});

Then('I should see homepage', () => {
    cy.get('a').should('contain.text', 'Welcome username')
})