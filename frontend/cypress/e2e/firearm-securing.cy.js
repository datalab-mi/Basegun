describe('Securing Firearm and Identification', () => {
  it('should secure and identificate real firearm', () => {
    cy.accueil()
    cy.miseEnSecurite()
    cy.getByDataTestid('select-file').as('fileInput')
    cy.intercept('POST', '/api/upload').as('upload')
    cy.get('@fileInput').selectFile('./cypress/images/pistolet-semi-auto.jpg', { force: true })
    cy.wait('@upload').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
    cy.url().should('contain', '/mise-en-securite-choix-option-etape/1')
    cy.getByDataTestid('button-next').should('have.attr', 'disabled')
    cy.contains('Bouton à côté du pontet').first().click()
    cy.getByDataTestid('button-next').should('not.have.attr', 'disabled')
    cy.getByDataTestid('button-next').click()
    cy.url().should('contain', '/mise-en-securite-tutoriel')
    cy.getVideo()
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('li', 'Actionner la culasse')
    cy.getByDataTestid('button-next').click()
    cy.Identification()
    cy.contains('Cartouches').first().click()
    cy.getByDataTestid('next-step').should('not.have.attr', 'disabled')
    cy.getByDataTestid('next-step').click()
    cy.url().should('contain', '/guide-identification/armes-alarme')
    cy.getByDataTestid('instruction-armeAlarme').should('contain', 'Votre arme')
    cy.getByDataTestid('next-step').click()
    cy.getByDataTestid('aucune-correspondance').click()
    cy.url().should('contain', '/guide-identification/resultat-final')
    cy.getByDataTestid('arm-category').should('contain', 'Catégorie B')
    cy.getByDataTestid('return-to-home-end').click()
    cy.url().should('contain', '/accueil')
  })
})
