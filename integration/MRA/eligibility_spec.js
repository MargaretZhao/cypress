describe('Verify Eligibility Page of Grant Application Form', function () {

    //beforeEach(function(){
    before(function () {
        cy.loginPortal()
        cy.loginCorpPass()
        cy.wait(25000)
        cy.contains('Apply for a grant to support your project')
            .click({ force: true })
        cy.wait(5000)
        cy.get('[type="radio"]').check('IT')
        cy.wait(5000)
        cy.contains('Bring my business overseas or establish a stronger international presence')
            .click({ force: true })
        cy.wait(5000)
        cy.contains('Market Readiness Assistance')
            .click({ force: true })
        cy.contains('Apply')
            .click({ force: true })
        cy.wait(5000)
        cy.contains('Proceed')
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
        cy.get('.form-horizontal:nth-child(5) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-eligibility-sg_registered_check-true').click();
        cy.get('.form-horizontal:nth-child(5) .bgp-radio:nth-child(2) > .radiobutton').click();
        cy.get('#react-eligibility-sg_registered_check-false').click();
        cy.get('.form-horizontal:nth-child(7) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-eligibility-turnover_check-true').click();
        cy.get('.form-horizontal:nth-child(7) .bgp-radio:nth-child(2) > .radiobutton').click();
        cy.get('#react-eligibility-turnover_check-false').click();
        cy.get('.form-horizontal:nth-child(9) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-eligibility-global_hq_check-true').click();
        cy.get('.form-horizontal:nth-child(9) .bgp-radio:nth-child(2) > .radiobutton').click();
        cy.get('#react-eligibility-global_hq_check-false').click();
        cy.get('.form-horizontal:nth-child(11) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-eligibility-started_project_check-true').click();
        cy.get('.form-horizontal:nth-child(11) .bgp-radio:nth-child(2) > .radiobutton').click();
        cy.get('#react-eligibility-started_project_check-false').click();
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