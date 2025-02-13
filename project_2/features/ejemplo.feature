Feature: Search on Google

  Scenario: User searches for "laptop" on Google
    Given I am on the Google homepage
    When I enter "laptop" in the search box
    And I click the "Buscar" button
    Then I should see the Google search results page
