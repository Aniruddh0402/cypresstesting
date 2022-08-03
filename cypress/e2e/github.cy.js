// const { should } = require("chai")

describe('git hub',()=>{

    it('git sign in',()=>{
        cy.visit('https://github.com/')
        
        cy.get('div.d-flex.flex-justify-between > .d-flex > .js-details-target > .octicon')
        .click()


        cy.get('.mr-3 > .HeaderMenu-link')
        .click()
        .url().should('include','login')

        cy.get('#login_field')
        // .should('be.visible')
        .type('anirudha007.ac@gmail.com')

        cy.get('#password')
        // .should('be.visible')
        .type('Bunny@0402')

        cy.get('.btn')
        // should('be.visible')
        .click()

        cy.url().should('include','github.com')

        cy.get('.dashboard-sidebar > .Details > .js-repos-container > .list-style-none > :nth-child(1) > .width-full > .wb-break-word > .color-fg-default')
        .click()
        .url().should('include','/Aniruddh0402/JSlearn')


        cy.go('back')

        cy.get('.dashboard-sidebar > .Details > .js-repos-container > .list-style-none > .private > .width-full > .wb-break-word > .color-fg-default')
        .click()
        .url().should('include','/Aniruddh0402/Aniruddh_code')
    })
})