Feature: Test the login functionality
  As an authenticated user I should be able  to login to the appplication

  Scenario: Using valid credentials I should be able to login 
    Given I open the browser
    And I visit the application
    And I enter "test.user@gmail.com.test" as username
    And I enter "Welcome2" as password
    When I click the login button
    Then I should see the dashboard page
    And I close the browser
    
    Scenario: Using in-valid credentials I should not be able to log in
    Given I open the browser
    And I visit the application
    And I enter "test.user222@gmail.com.test" as username
    And I enter "Welcome222" as password
    When I click the login button 
    Then I should see and error message
    And I close the browser
    
        
    



