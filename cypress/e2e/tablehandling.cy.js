/// <reference types="Cypress" />

describe('table', () => {


    it('table elements', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')


        //check value presence anywhere in the table
        cy.get('table[name=BookTable]')
            .contains('td', 'Learn Selenium')
            .should('be.visible')


        // check the value present in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(3) > td:nth-child(3)')
            .contains('selenium')
            .should('be.visible')
    })
})