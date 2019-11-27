describe('Verify BGP CorpPass User Login Page', function(){
         
         beforeEach(() => {
                    cy.webfrontend()
                    cy.contains('Login with CorpPass')
                    .click({force:true})
                    cy.clearCookies()
         })
         

         it('verify CorpPass login page lay out',() => {
            cy.contains('Stub CorpPass')
            cy.contains('Login with predefined user')
            cy.contains('Login with your own user')
          })

         it('verify Login with predefined user fields',() => {
            //TBD, verify these fields present
         })
         
         it('navigates to the successful login page with predefined user',() => {
            //TBD
         })
         
         it('verify Login with your own user fields',() => {
            //TBD verify the fields present

         })

         it('verify invalid input for NRIC',() => {
            /* TBD verify invalid input won't crash,
             like
             S@$#$FGRT
             123456788
             QWERTTUII
             null
             leave empty
             
             cy.get('[placeholder="NRIC"]').type('{enter}}')
             cy.get('.error-messages').should('contain','NRIC can\'t be blank')
             then fill in other fields as normal and submit
             */

         })

         it('verify invalid input for Name',() => {
            /* TBD verify invalid input won't crash,
            like
            #$$%65gt
            3446565
            Tt_WE% tr$$
            null
            empty
             
            then fill in other fields as normal and submit
            */

         })
         
         it('verify invalid input for UEN',() => {
            /* TBD verify invalid input won't crash,
            like
            #$$%65gt
            3446565
            tt WE% tr$$
            null
            empty
             
            then fill in other fields as normal and submit
            */

         })

         it('navigates to the successful login page with own user',() => {
            cy.get('[name="CPUID"]').clear().type('S1234567A')
            cy.get('[name="CPUID_FullName"]').clear().type('Tan Ah Kow')
            cy.get('[name="CPEntID"]').clear().type('BGPQEDEMO')
            cy.get('[name="CPRole"]').then(option => {
            cy.wrap(option).contains('Acceptor');
            option[0].click(); })
            cy.get('button').last().click()
            cy.contains('Tan Ah Kow')//here need to modify to put the name field exactly match the name
            cy.contains('Acceptor')
         })
         

})


