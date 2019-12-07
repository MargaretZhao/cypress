describe('Verify Form Submission Page of Grant Application Form', function () {

    before(function () {
        cy.loginPortal()
        cy.loginCorpPass()
        cy.get('.col-sm-12.col-md-4', { timeout: 50000 })
            .should('contain', 'Get new grant')
        cy.contains('Apply for a grant to support your project')
            .click({ force: true })
        cy.get('[type="radio"]').check('IT')
        cy.contains('Bring my business overseas or establish a stronger international presence')
            .click({ force: true })
        cy.contains('Market Readiness Assistance')
            .click({ force: true })
        cy.contains('Apply')
            .click({ force: true })
        cy.contains('Proceed')
            .click({ force: true })
        cy.contains('Declare & Review')
            .click({ force: true })
    })

    it('Verify Form Submission page lay out', () => {
        cy.get('.col-xs-12', { timeout: 10000 })
            .should('contain', 'Has the applicant been or is currently being')
            .and('contain', 'Has the applicant been or is currently being engaged in any civil suit')
            .and('contain', 'Is the applicant currently, or has been')
            .and('contain', 'Has the applicant applied for or obtained any other grants or tax')
            .and('contain', 'Has the applicant applied for or obtained any other incentives or concessions')
            .and('contain', 'Has the applicant commenced on the project prior to this application')
            .and('contain', 'Do any of the suppliers and service providers engaged in this project have any relationship')

        cy.get('h3', { timeout: 5000 })
            .should('contain', 'Consent & Acknowledgement')

    })

    it('Click all No and Save', () => {
        cy.get('.bgp-radio')
            .each(($btn) => {
                const text = $btn.text()
                const yesButton = text.includes('No')
                if (yesButton) {
                    cy.get($btn).click()
                }
            })
        cy.get('.bgp-btn-save')
            .click()
    })

    it('Click certain Yes and fill in details', () => {
        cy.get('#react-declaration-civil_proceeding_check-true').click();
        cy.get('#react-declaration-civil_proceeding_remarks').click();
        cy.get('#react-declaration-civil_proceeding_remarks').type('test');
        cy.get('#save-btn').click();
        cy.get('#react-declaration-civil_proceeding_remarks').should('have.value', 'test')
    })

})