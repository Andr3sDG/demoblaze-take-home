export class navigation {

    navigateToHomePage() {
        cy.contains('Home').click()
    }

    navigateToCartPage() {
        cy.contains('Cart').click()
    }

    navigateToPhonesSection() {
        cy.contains('Phones').click()
    }

    navigateToLaptopsSection() {
        cy.contains('Laptop').click()
    }

}

export const onNavigation = new navigation()