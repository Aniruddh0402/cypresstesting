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


        cy.get('#assignleave_txtToDate')
            .click()

        cy.get('select[class=ui-datepicker-year]')
            .select('1999')

        cy.get('select[class=ui-datepicker-month]')
            // .click('{force: true}')
            .select('Feb')

        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default')
            .click()

        cy.get('#assignleave_partialDays')
            .select('Start and End Day')
            .should('have.value', 'start_end')

        cy.get('#assignleave_firstDuration_duration')
            .should('be.visible')
            .select('Half Day')
            .should('have.value', 'half_day')

        cy.get('#assignleave_firstDuration_ampm')
            .should('be.visible')
            .select('Afternoon')
            .should('have.value', 'PM')

        cy.get('#assignleave_secondDuration_duration')
            .should('be.visible')
            .select('Half Day')
            .should('have.value', 'half_day')

        cy.get('#assignleave_secondDuration_ampm')
            .should('be.visible')
            .select('Afternoon')
            .should('have.value', 'PM')

        cy.get('#assignleave_txtComment')
            .type('Want some leaves for personal work')

        cy.get('#assignBtn')
            .click()

        cy.get('#confirmOkButton')
            .click()
    })

    it('Dashboard', () => {
        cy.get('#menu_dashboard_index > b')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

            .url()
            .should('include', '/index.php/dashboard')
    })

    it('Leave list', () => {

        cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

        cy.get('input[id=calFromDate]')
            .click()

        cy.get('select[class=ui-datepicker-month]')
            .select('Sep')
        // .should('have.value', '8')

        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(2) > td:nth-child(5) > a')
            .click()

        cy.get('#calToDate')
            .click()

            cy.get('.ui-datepicker-month')
            .select('Sep')
    })



})