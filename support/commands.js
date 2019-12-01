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

Cypress.Commands.add('loginPortal',() => {
                     cy.visit(Cypress.env('bgpUrl'), {
                     //auth: { username: 'public',
                     auth: { username: Cypress.env('bgpUser'),
                     //password: 'Let$BeC001' }})
                     password: Cypress.env('bgpPass')}})
                     })

Cypress.Commands.add('loginCorpPass',() => {
                     cy.contains('Login with CorpPass')
                     .click({force:true})
/*
                     cy.request({
                        method: 'GET',
                        url: 'https://bgp-qa.gds-gov.tech/saml/acs?CPUID=S2407463B&CPUID_FullName=Ng+Raphael+Yong&CPEntID=T12LL1368D&CPRole=Acceptor'
                                })
                     .then((resp) => {
                           window.localStorage.setItem('jwt',resp.body.user.token)
                           })
*/
                     //cy.get('[placeholder="NRIC"]').type('S1234567A')
                     cy.get('[placeholder="NRIC"]').clear().type(Cypress.env('corpNRIC'))
                     //cy.get('[placeholder="Name"]').type('Tan Ah Kow')
                     cy.get('[placeholder="Name"]').clear().type(Cypress.env('corpName'))
                     //cy.get('[placeholder="UEN"]').type('BGPQEDEMO')
                     cy.get('[placeholder="UEN"]').clear().type(Cypress.env('corpUEN'))
                     cy.get('[name="CPRole"]').then(option => {
                     //cy.wrap(option).contains('Acceptor');
                     cy.wrap(option).contains(Cypress.env('corpRole'));
                     option[0].click(); })
                     cy.get('button').last().click()
                     })
