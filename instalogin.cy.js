// const cypress = require("cypress");

describe('insta login page',()=>{

    beforeEach(()=>{
        cy.visit('https://www.instagram.com/accounts/login/')

    })

    it('using invalid pass',()=>{

        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
        .type('i_am_aniruddh10')
    
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
        .type('hiahnjj')
    
        cy.get(':nth-child(3) > .sqdOP')
        .click()
    
        
    })

    it('field blank and click submit button',()=>{
        
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
        .type(' ')
    
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
        .type(' ')
    
        cy.get(':nth-child(3) > .sqdOP')
        .click()
    })
    
    
    it('forget password functionality',()=>{
        
        cy.get('._2Lks6')
        .click()
        .url().should('include','/accounts/password/reset/')
    })
    
    

})

