describe('Verify Review and Submit Grant Application Form', function () {

    it('Review and check result', () => {

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

        cy.eligibilityManFill()

        cy.contains('Contact Details')
            .click({ force: true })
        cy.contactDetailsManFill()

        cy.contains('Proposal')
            .click({ force: true })
        cy.proposalManFill()

        cy.contains('Business Impact')
            .click({ force: true })
        cy.businessImpactManFill()

        cy.contains('Cost')
            .click({ force: true })
        cy.costManFill()
        cy.wait(10000)

        cy.contains('Declare & Review')
            .click({ force: true })
        cy.declareReviewManFill()

        cy.get('[id="review-btn"]')
            .click({ force: true })

        cy.get('.bgp-sidebar', { timeout: 50000 })
            .should('contain', 'Company Profile')

        //eligibility section
        cy.get('[id="eligibility"]')
            .should('not.contain.text', 'No')

        //proposal section
        cy.get('[id="project"]')
            .should('contain', Cypress.env('projectTitle'))
            .and('contain', Cypress.env('projectDescription'))

        //business impact section
        cy.get('[id="project_impact"]')
            .should('contain', Cypress.env('rationaleRemarks'))
            .and('contain', Cypress.env('benefitsRemarks'))

        //cost section
        cy.get('[id="project_cost"]')
            .should('contain', Cypress.env('fileName'))

    })

})


