Feature: E-commerce website

    Scenario: Order a product
        Given I am on the e-commerce website
        When I login to the website
        And I add the product to the cart
        And I go to the cart
        And I Validate the total price
        And I go to the checkout
        Then I should see a confirmation message