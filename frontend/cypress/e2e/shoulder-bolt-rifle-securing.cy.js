describe('Shoulder Bolt Rifle Securing', () => {
  it('should secure and identficate real shoulder bolt rifle', () => {
    cy.accueil()
    cy.miseEnSecurite()
    cy.getByDataTestid('select-file').as('fileInput')
    cy.intercept('POST', '/api/upload').as('upload')
    cy.get('@fileInput').selectFile('./cypress/images/epaule-a-verrou.jpg', { force: true })
    cy.wait('@upload').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
    cy.getVideo()
    cy.url().should('contain', '/mise-en-securite-tutoriel')
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('li', 'Ouvrez la culasse')
    cy.getByDataTestid('button-next').click()
    cy.Identification()
    cy.contains('balles').first().click()
    cy.getByDataTestid('next-step').should('not.have.attr', 'disabled')
    cy.getByDataTestid('next-step').click()
    cy.url().should('contain', '/guide-identification/resultat-final')
    cy.getByDataTestid('arm-category').should('contain', 'Catégorie B ou C')
    cy.getByDataTestid('return-to-home-end').click()
    cy.url().should('contain', '/accueil')
  })
})
