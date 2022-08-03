/// <reference types="Cypress" />

describe('Alerts handling',()=>{


    it('window alert',()=>{

         cy.visit('https://mypage.rediff.com/login/dologin')
         cy.get('#pass_div > [type="submit"]')
         .click()

         cy.on('window:alert',(str)=>{

            expect(str).to.equal('Please enter valid email')
         })

    })
    
    
    it('window confirm alert',()=>{

         cy.visit('https://testautomationpractice.blogspot.com/')
         cy.get('#HTML9 > .widget-content > button').click()

         cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Press a button!')
         })
       

    })
})