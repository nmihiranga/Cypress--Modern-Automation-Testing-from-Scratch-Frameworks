Feature: E-commerce website

  # @smoke    # To run only smoke test
  # @regression  # To run only regression test
    Scenario: Order a product
        Given I am on the e-commerce website
        When I login to the website
        And I add the product to the cart
        And I go to the cart
        And I Validate the total price
        And I go to the checkout
        Then I should see a confirmation message

  # To give data directly in the feature file
  # Scenario Outline: Order a product
     #  When I login to the website
     #  | username           | password |
     #  | rahulshettyacademy | learning |