/// <reference types="cypress" />

describe('digital tienda frontend QA challenge', () => {

    it('displays two todo items by default', () => {
        cy.visit('https://www.google.es')

        cy.get('.QS5gu').contains('Aceptar todo').click()

        cy.get('.gLFyf').type('automatización{enter}')

        cy.contains('Wikipedia').click()

        cy.screenshot()
    })
    
})