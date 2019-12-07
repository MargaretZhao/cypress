describe('Verify Eligibility Page of Grant Application Form', function () {

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
        cy.contains('Eligibility')
            .click({ force: true })
    })

    it('Verify Eligibility page lay out', () => {
        cy.get('.col-xs-12', { timeout: 10000 })
            .should('contain', 'Is the applicant registered in Singapore?')
            .and('contain', "Is the applicant's group sales turnover less than or equal to S$100m or is the applicant's group employment size less than or equal to 200?")
            .and('contain', 'Does the applicant have at least 30%')
            .and('contain', 'Are all the following statements true for this project?')
    })

    it('Verify all buttons could be clicked', () => {
        cy.get('.bgp-radio')
            .each(($btn) => {
                cy.get($btn).click()
            })
    })

    it('Click all Yes then save', () => {
        cy.get('.bgp-radio')
            .each(($btn) => {
                const text = $btn.text()
                const yesButton = text.includes('Yes')
                if (yesButton) {
                    cy.get($btn).click()
                }
            })
        cy.get('.bgp-btn-save')
            .click()
    })

})