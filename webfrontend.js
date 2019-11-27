describe('verify navigation to BGP CorpPass login page', function(){
         
         beforeEach(() => {
                    cy.visit('https://bgp-qa.gds-gov.tech', {
                    auth: { username: 'public',
                    password: 'Let$BeC001' }})
         })
         
         it('has Login with CorpPass button',() => {
            cy
            .contains('Login with CorpPass')
         })
         
         it('navigates to CorpPass login page',() => {
            cy
            .contains('Login with CorpPass')
            .click({force:true})
         })

         
})
         






