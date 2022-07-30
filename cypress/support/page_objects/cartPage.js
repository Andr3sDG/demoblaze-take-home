import userData from '../../fixtures/userData.json'

const money = 2000

function getValue(text) {
    var num = parseInt(text.replace( /^\D+/g, ''))
    return num
}

export class cartPage {

    assertProductsAdded() {
        cy.get('tr[class="success"]').should('have.length', 2)
    }

    getTotal() {
        cy.get('#totalp').then( label => {
            var price = getValue(label.text())
            expect(money).to.be.gte(price)
        })
    }

    placeOrder() {
        cy.contains('Place Order').click()
        cy.get('.modal-body').find('form').then( form => {
            cy.wrap(form).find('#name').type(userData.Name)
            cy.wrap(form).find('#country').type(userData.Country)
            cy.wrap(form).find('#city').type(userData.City)
            cy.wrap(form).find('#card').type(userData.CreditCard)
            cy.wrap(form).find('#month').type(userData.Month)
            cy.wrap(form).find('#year').type(userData.Year)
        })
        cy.contains('button', 'Purchase').click()
        cy.get('.sweet-alert').find('button[class="confirm btn btn-lg btn-primary"]').wait(1000).click()
        cy.url().should('include', '/index.html')
    }


}

export const onCartPage = new cartPage()