describe('Securing Firearm and Identification', () => {
  it('should secure and identificate real firearm', () => {
    cy.visit('/')
    cy.getByDataTestid('basegun-logo').should('exist')
    cy.contains('li', 'Basegun est une application')
    cy.get('swiper-container').shadow().find('.swiper-button-next').click()
    cy.contains('li', 'ne remplace en aucun cas l\'avis d\'un expert')
    cy.get('#agree-button').contains('J\'ai compris').click()
    cy.url().should('contain', '/accueil')

    cy.getByDataTestid('secure-firearm')
      .contains('Je veux mettre en sécurité mon arme')
      .click()
    cy.url().should('contain', '/guide-mise-en-securite/mise-en-securite-recommandations')
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('span', 'extraire des munitions')
    cy.getByDataTestid('button-next')
      .contains('Suivant')
      .click()
    cy.url().should('contain', '/guide-mise-en-securite/mise-en-securite-instructions')
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('span', 'DIRECTION SÛRE')
    cy.getByDataTestid('button-next')
      .contains('Suivant')
      .click()
    cy.url().should('contain', '/guide-mise-en-securite/mise-en-securite-introduction')
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('span', 'tutoriel adapté')
    cy.getByDataTestid('button-next')
      .contains('Suivant')
      .click()
    cy.getByDataTestid('select-file').as('fileInput')
    cy.intercept('POST', '/api/upload').as('upload')
    cy.get('@fileInput').selectFile('./cypress/images/pistolet-semi-auto.jpg', { force: true })
    cy.wait('@upload').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
    cy.url().should('contain', '/mise-en-securite-choix-option-etape-2')
    cy.getByDataTestid('button-next').should('have.attr', 'disabled')
    cy.contains('bouton pontet').first().click()
    cy.getByDataTestid('button-next').should('not.have.attr', 'disabled')
    cy.getByDataTestid('button-next').click()
    cy.url().should('contain', '/mise-en-securite-tutoriel')
    cy.get('video')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(($video) => {
        $video[0].play()
      })
    cy.wait(2000)
    cy.get('video').then(($video) => {
      $video[0].pause()
    })
    cy.wait(2000)
    cy.contains('h2', 'Mettre en sécurité mon arme')
    cy.contains('li', 'Actionner la culasse')
    cy.getByDataTestid('button-next').click()
    cy.contains('h2', 'Fin de la mise en sécurité')
    cy.getByDataTestid('go-to-identification').click()
    cy.url().should('contain', '/guide-identification/resultat-typologie')
    cy.contains('h2', 'Typologie de l\'arme')
    cy.contains('p', 'Basegun a identifié votre arme')
    cy.getByDataTestid('next-step').click()
    cy.url().should('contain', 'guide-identification/informations-complementaires')
    cy.getByDataTestid('next-step').click()
    cy.url().should('contain', '/guide-identification/munition-type')
    cy.getByDataTestid('next-step').should('have.attr', 'disabled')
    cy.contains('cartouches').first().click()
    cy.getByDataTestid('next-step').should('not.have.attr', 'disabled')
    cy.getByDataTestid('next-step').click()
    cy.url().should('contain', '/guide-identification/resultat-final')
    cy.getByDataTestid('arm-category').should('contain', 'Catégorie B')
    cy.getByDataTestid('return-to-home-end').click()
    cy.url().should('contain', '/accueil')
  })
})
