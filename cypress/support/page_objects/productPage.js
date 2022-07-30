export class productPage {

    addToCart() {
        cy.contains('Add to cart').click()
        cy.on('window:alert', alert => {
            expect(alert).to.equal('Product added')
        })
    }

}

export const onProductPage = new productPage()