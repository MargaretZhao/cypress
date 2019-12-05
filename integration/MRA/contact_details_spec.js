describe('Verify Contact Details of Grant Application Form', function () {

    //beforeEach(function(){
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
        cy.contains('Contact Details')
            .click({ force: true })
    })

    it('Verify Contact Details page lay out', () => {
        cy.get('.subsection-title', { timeout: 10000 })
            .should('contain', 'Main Contact Person')
            .and('contain', "Letter Of Offer Addressee")
    })

    it('Verify Main Contact Person Section', () => {
        cy.get('.bgp-label', { timeout: 10000 })
            .should('contain', 'Name')
            .and('contain', "Job Title")
            .and('contain', "Contact No")
            .and('contain', "Email")
            .and('contain', "Alternate Contact Person's Email")
            .and('contain', "Mailing Address")
    })

    it('Verify Letter of Offer Addressee Section', () => {
        cy.get('.bgp-label', { timeout: 10000 })
            .should('contain', 'Name')
            .and('contain', "Job Title")
            .and('contain', "Email")
    })

    it('Fill in Main Contact Person Section and Save', () => {
        cy.get('[id="react-contact_info-name"]')
            .type('Test Name')
        cy.get('[id="react-contact_info-designation"]')
            .type('Manager')
        cy.get('[id="react-contact_info-phone"]')
            .type('98765432')
        cy.get('[id="react-contact_info-primary_email"]')
            .type('test1@gmail.com')
        cy.get('[id="react-contact_info-secondary_email"]')
            .type('test2@gmail.com')
        cy.contains('Same as registered address in Company Profile')
            .click({ force: true })

        cy.get('.bgp-btn-save')
            .click()
    })

    it('Load Letter Of Offer Addressee same as Main Contact Person', () => {
        cy.contains('Same as main contact person')
            .click({ force: true })

        cy.get('[id="react-contact_info-name"]').invoke('val').then(contactName => {
            cy.get('[id="react-contact_info-offeree_name"]').should('have.value', contactName)
        })

        cy.get('[id="react-contact_info-designation"]').invoke('val').then(contactDes => {
            cy.get('[id="react-contact_info-offeree_designation"]').should('have.value', contactDes)
        })

        cy.get('[id="react-contact_info-primary_email"]').invoke('val').then(contactEmail => {
            cy.get('[id="react-contact_info-offeree_email"]').should('have.value', contactEmail)
        })

        cy.get('.bgp-btn-save')
            .click()
    })


})