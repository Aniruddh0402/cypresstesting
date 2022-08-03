/// reference types = "cypress" /

describe('create new git acc',()=>{

    it('check error message',()=>{

        cy.visit('https://github.com/')

        cy.get('div.d-flex.flex-justify-between > .d-flex > .d-inline-block').click()

        cy.get('#email').type('anirudha007.ac@gmail.com')
        
    })
})