export class homePage {

    selectPhone(phoneName) {
        cy.wait(1000)
        cy.contains(phoneName).click()
    }

    selectLaptop(laptopName) {
        cy.wait(1000)
        cy.contains('a', laptopName).click()
    }

}

export const onHomePage = new homePage()