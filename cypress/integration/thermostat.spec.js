describe('Thermostat home page', () => {
  it('shows a welcome message!', () => {
    cy.visit('/')
    // change the assertion to expect a message you want
    // see it fail, and then update your html file to make it pass.

    cy.get("#welcome").should('contain', 'add your welcome message here')
  })

  it('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#button").click()
    cy.get("#message").should('contain', '21')
  })

  it('when button clicked then temp decreases by 1 ', () => {
    cy.visit('/')
    cy.get("#down").click()
    cy.get("#message").should('contain', '19')
  })
  it('power saving text', () => {
    cy.visit('/')
    cy.get("#power").should('contain', 'on')
  })
  it('change power saving text', () => {
    cy.visit('/')
    cy.get("#change").click()
    cy.get("#power").should('contain', 'off')
  })
  it('reset', () => {
    cy.visit('/')
    cy.get("#down").click()
    cy.get("#reset").click()
    cy.get("#message").should('contain', '20')
  })
  it('usage', () => {
    cy.visit('/')
    cy.get("#reset").click()
    cy.get("#usage").should('contain', 'medium-usage')
  })
})