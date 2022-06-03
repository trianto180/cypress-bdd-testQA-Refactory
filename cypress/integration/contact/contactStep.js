/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ContactPage from './contactPage';

Given ('I open a page', () => {
    ContactPage.visit()
})

When ('I type username', () => {
    ContactPage.fillEmail('Example.email')
    ContactPage.fillName('Name')
    ContactPage.fillMessage('Example')
    ContactPage.send()
})

Then ('I should see homepage', () => {
    cy.url().should('include', 'index.html')
})