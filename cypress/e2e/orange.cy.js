/// <reference types="Cypress" />

describe('orange hrm automate', () => {

    it('login page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()


    })
    it('Assign Leave', () => {

        cy.get(':nth-child(1) > .quickLaunge > a')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()
            .url().should('include', '/leave/assignLeave')

        cy.get('input[id=assignleave_txtEmployee_empName]')
            .type('Or{enter}')

        cy.get('select[id=assignleave_txtLeaveType]')
            .select('CAN - Personal')
            .should('have.value', '9')

        cy.get('input[id=assignleave_txtFromDate]')
            .click()
        cy.get('select[class=ui-datepicker-year]')
            .select('1999')
        // .should('be.selected')
        cy.get('select[class=ui-datepicker-month]')
            .select('Feb')
        cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default')
            .click()


            cy.get('select[class=ui-datepicker-year]')
            .select('1999')

            cy.get('select[class=ui-datepicker-month]')
            .select('Feb')




    })

    // it('Apply Leave', () => {

    //     cy.get(':nth-child(4) > .quickLaunge > a > .quickLinkText')
    //         .click()

    //     cy.get('#txtUsername')
    //         .type('Admin')

    //     cy.get('#txtPassword')
    //         .type('admin123')

    //     cy.get('#btnLogin')
    //         .click()
    // })
})