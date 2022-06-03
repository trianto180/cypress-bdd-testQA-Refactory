Feature: Cart Test

    I test a Cart Test

    Scenario: Checkout Cart
        Given I visit home page
        When I Click a item
        And I click add to Cart
        And I click navbar Cart
        And I click place order
        And I fill place order
        And I click purchase
        Then I should see homepage