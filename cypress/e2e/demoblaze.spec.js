/// <reference types="cypress" />

import { onHomePage } from "../support/page_objects/homePage"
import { onProductPage } from "../support/page_objects/productPage"
import { onNavigation } from "../support/page_objects/navigation"
import phones from '../fixtures/phones.json'
import laptops from '../fixtures/laptops.json'
import { onCartPage } from "../support/page_objects/cartPage"

describe('Demoblaze test suite', () => {

  beforeEach('Open home page', () => {
    cy.visit('/')
  })

  it('User adds different articles to cart and goes to checkout', () => {
    onNavigation.navigateToPhonesSection()
    onHomePage.selectPhone(phones[3])
    onProductPage.addToCart()
    onNavigation.navigateToHomePage()
    onNavigation.navigateToLaptopsSection()
    onHomePage.selectLaptop(laptops[6])
    onProductPage.addToCart()
    onNavigation.navigateToCartPage()
    onCartPage.assertProductsAdded()
    onCartPage.getTotal()
    onCartPage.placeOrder()
  })

})