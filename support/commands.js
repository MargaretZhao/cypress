// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('loginPortal', () => {
      cy.visit(Cypress.env('bgpUrl'), {
            auth: {
                  username: Cypress.env('bgpUser'),
                  password: Cypress.env('bgpPass')
            }
      })
})

Cypress.Commands.add('loginCorpPass', () => {
      cy.contains('Login with CorpPass')
            .click({ force: true })
      cy.get('h6', { timeout: 30000 })
            .should('contain', 'Login with your own user')
      cy.get('[placeholder="NRIC"]').clear()
            .type(Cypress.env('corpNRIC'))
      cy.get('[placeholder="Name"]').clear()
            .type(Cypress.env('corpName'))
      cy.get('[placeholder="UEN"]').clear()
            .type(Cypress.env('corpUEN'))
      cy.get('[name="CPRole"]').then(option => {
            cy.wrap(option).contains(Cypress.env('corpRole'));
            option[0].click();
      })
      cy.get('button').last().click()
})

//This is to fill in the eligibility section mandatory fields
Cypress.Commands.add('eligibilityManFill', () => {
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

//This is to fill in the Contact Details section mandatory fields
Cypress.Commands.add('contactDetailsManFill', () => {
      cy.get('[id="react-contact_info-name"]')
            .type(Cypress.env('contactName'))
      cy.get('[id="react-contact_info-designation"]')
            .type(Cypress.env('contactDesignation'))
      cy.get('[id="react-contact_info-phone"]')
            .type(Cypress.env('contactPhone'))
      cy.get('[id="react-contact_info-primary_email"]')
            .type(Cypress.env('contactPrimaryEmail'))
      cy.get('[id="react-contact_info-secondary_email"]')
            .type(Cypress.env('contactSecondaryEmail'))
      cy.contains('Same as registered address in Company Profile')
            .click({ force: true })
      cy.contains('Same as main contact person')
            .click({ force: true })
      cy.get('.bgp-btn-save')
            .click()
})

//This is to fill in the Proposal section mandatory fields
Cypress.Commands.add('proposalManFill', () => {
      cy.get('#react-project-title').click();
      cy.get('#react-project-title')
            .type(Cypress.env('projectTitle'));
      cy.get('.form-horizontal:nth-child(6) .glyphicon').click();
      cy.get('.rdtOpen tr:nth-child(3) > .rdtDay:nth-child(3)').click();
      cy.get('.form-horizontal:nth-child(7) .glyphicon').click();
      cy.get('.rdtOpen tr:nth-child(6) > .rdtDay:nth-child(2)').click();
      cy.get('#react-project-description').click();
      cy.get('#react-project-description')
            .type(Cypress.env('projectDescription'));
      cy.get('[id="react-select-project-activity--value"]')
            .click()
            .type(Cypress.env('projectActivity'))
      cy.get('[id="react-select-project-primary_market--value"]').click()
            .type(Cypress.env('primaryTargetMarket'))
      cy.get('#save-btn').click();
})

//This is to fill in the Business Impact section mandatory fields
Cypress.Commands.add('businessImpactManFill', () => {
      cy.get('#react-project_impact-fy_end_date_0').click();
      cy.get('tr:nth-child(6) > .rdtDay:nth-child(3)').click();
      cy.get('#react-project_impact-overseas_sales_0')
            .type(Cypress.env('sales0'));
      cy.get('#react-project_impact-overseas_sales_1')
            .type(Cypress.env('sales1'));
      cy.get('#react-project_impact-overseas_sales_2')
            .type(Cypress.env('sales2'));
      cy.get('#react-project_impact-overseas_sales_3')
            .type(Cypress.env('sales3'));
      cy.get('#react-project_impact-overseas_investments_0')
            .type(Cypress.env('investments0'));
      cy.get('#react-project_impact-overseas_investments_1')
            .type(Cypress.env('investments1'));
      cy.get('#react-project_impact-overseas_investments_2')
            .type(Cypress.env('investments2'));
      cy.get('#react-project_impact-overseas_investments_3')
            .type(Cypress.env('investments3'));
      cy.get('#react-project_impact-rationale_remarks')
            .type(Cypress.env('rationaleRemarks'));
      cy.get('#react-project_impact-benefits_remarks')
            .type(Cypress.env('benefitsRemarks'));
      cy.get('#save-btn').click();
})

//This is to fill in the Cost section mandatory fields
Cypress.Commands.add('costManFill', () => {
      cy.get('[id="react-project_cost-vendors-add-item"]')
            .click();
      cy.contains('Overseas')
            .click({ force: true })
      cy.get('[id="react-project_cost-vendors-0-vendor_name"]')
            .type(Cypress.env('projectVendor'))
      cy.fixture(Cypress.env('fileName')).then((fileContent) => {
            cy.get('[type="file"]').upload(
                  { fileContent, fileName: Cypress.env('fileName'), mimeType: 'image/jpeg', encoding: 'base64' },
                  { subjectType: 'drag-n-drop' },
            );
      });
      cy.get('[id="react-project_cost-vendors-0-amount_in_billing_currency"]')
            .type(Cypress.env('vendorCostbilling'))
      cy.get('.bgp-btn-save')
            .click()
})

//This is to fill in the Declare & Review section mandatory fields
Cypress.Commands.add('declareReviewManFill', () => {

      cy.get('.form-horizontal:nth-child(1) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-criminal_liability_check-false').click();
      cy.get('.form-horizontal:nth-child(2) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-civil_proceeding_check-false').click();
      cy.get('.form-horizontal:nth-child(3) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-insolvency_proceeding_check-false').click();
      cy.get('.form-horizontal:nth-child(4) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-project_incentives_check-false').click();
      cy.get('.form-horizontal:nth-child(5) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-other_incentives_check-false').click();
      cy.get('.form-horizontal:nth-child(6) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-project_commence_check-false').click();
      cy.get('.form-horizontal:nth-child(7) .bgp-radio:nth-child(1) > .radiobutton').click();
      cy.get('#react-declaration-related_party_check-false').click();

      cy.get('[id="react-declaration-consent_acknowledgement_check"]')
            .click({ force: true })

      cy.get('.bgp-btn-save')
            .click()
})