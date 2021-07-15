Feature: As a user I should be able to create accounts

  Scenario: Create and save an account
    Given I open my browser
    And I visit my application
    And I enter "test.user@gmail.com.test" as username
    And I enter "Welcome2" as password
    When I click the login button
    Then I should see the dashboard page
    And I click the "Accounts" tab
    And I click the "New" button
    And I enter "Muhammad" in the account name field
    And I select "Yes" for the "Active" dropdown field
    And I click the "Save" button
    And I close the browser
