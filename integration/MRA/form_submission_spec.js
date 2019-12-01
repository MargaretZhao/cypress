describe('Verify Form Submission Page of Grant Application Form', function () {

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
        cy.wait(5000)
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
        cy.get('.form-horizontal:nth-child(1) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-criminal_liability_check-false').click();
        cy.get('.form-horizontal:nth-child(2) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-civil_proceeding_check-false').click();
        cy.get('.form-horizontal:nth-child(3) .bgp-radio:nth-child(1)').click();
        cy.get('#react-declaration-insolvency_proceeding_check-false').click();
        cy.get('.form-horizontal:nth-child(4) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-project_incentives_check-false').click();
        cy.get('.form-horizontal:nth-child(5) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-other_incentives_check-false').click();
        cy.get('.form-horizontal:nth-child(6) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-project_commence_check-false').click();
        cy.get('.form-horizontal:nth-child(7) .bgp-radio:nth-child(1) > .radiobutton').click();
        cy.get('#react-declaration-related_party_check-false').click();
        cy.get('#react-declaration-consent_acknowledgement_check').click();
        cy.get('#save-btn').click();
    })

    it('Click certain Yes and fill in details', () => {
        cy.get('#react-declaration-civil_proceeding_check-true').click();
        cy.get('#react-declaration-civil_proceeding_remarks').click();
        cy.get('#react-declaration-civil_proceeding_remarks').type('test');
        cy.get('#save-btn').click();
        cy.get('#react-declaration-civil_proceeding_remarks').should('have.value', 'test')
    })

    it('Submit and check result', () => {
        //TBD, need to fill in all other form first
    })


})