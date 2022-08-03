const cypress = require("cypress")

describe('insta Assign',()=>{

    it('validate sign in page',()=>{

        cy.visit('https://www.instagram.com/')

        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('i_am_aniruddh10')

        

        
        
    })
})