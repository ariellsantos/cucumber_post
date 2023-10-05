Feature: apples basket
  As client i want to have a basket to hold apples

  Scenario: I can take some apples
    Given I have 4 apples in the basket
    When I take 3 apples
    Then Should be 1 apples left in the basket

  Scenario: I can't take more apples than i have
    Given I have 5 apples in the basket
    When I take 7 apples , more than the amount of apples that i have
    Then  It should response an error "You can't take more than 5 apples"

  Scenario: I can add more apples to my basket
    Given  I have 0 apples in the basket
    When  I add 4 apples
    Then  Should be 4 apples left in the basket

  Scenario: I can't exceed the capacity of apples of the basket
    Given  I have 7 apples in the basket
    When  I add 4 apples more, more than the max capacity
    Then  It should response an error "You can't have more than 10 apples in the basket"
