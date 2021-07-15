$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Accounts.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to create accounts",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-create-accounts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create and save an account",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-create-accounts;create-and-save-an-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open my browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click the \"Accounts\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"New\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Muhammad\" in the account name field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"Yes\" for the \"Active\" dropdown field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AccountsTest.i_open_my_browser()"
});
formatter.result({
  "duration": 1678169800,
  "status": "passed"
});
formatter.match({
  "location": "AccountsTest.i_visit_my_application()"
});
formatter.result({
  "duration": 338015200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_username(String)"
});
formatter.result({
  "duration": 73602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_password(String)"
});
formatter.result({
  "duration": 63536500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 996489000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 841203700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts",
      "offset": 13
    }
  ],
  "location": "AccountsTest.i_click_the_tab(String)"
});
formatter.result({
  "duration": 173433300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 13
    }
  ],
  "location": "AccountsTest.i_click_the_button(String)"
});
formatter.result({
  "duration": 423665000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muhammad",
      "offset": 9
    }
  ],
  "location": "AccountsTest.i_enter_in_the_account_name_field(String)"
});
formatter.result({
  "duration": 54566400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 10
    },
    {
      "val": "Active",
      "offset": 24
    }
  ],
  "location": "AccountsTest.i_select_for_the_dropdown_field(String,String)"
});
formatter.result({
  "duration": 126374700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 13
    }
  ],
  "location": "AccountsTest.i_click_the_button(String)"
});
formatter.result({
  "duration": 1196330900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_close_the_browser()"
});
formatter.result({
  "duration": 697732400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test the login functionality",
  "description": "As an authenticated user I should be able  to login to the appplication",
  "id": "test-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Using valid credentials I should be able to login",
  "description": "",
  "id": "test-the-login-functionality;using-valid-credentials-i-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I visit the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1100124500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 288388900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_username(String)"
});
formatter.result({
  "duration": 66431900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_password(String)"
});
formatter.result({
  "duration": 63420300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 745781200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 1276211400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_close_the_browser()"
});
formatter.result({
  "duration": 684715200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Using in-valid credentials I should not be able to log in",
  "description": "",
  "id": "test-the-login-functionality;using-in-valid-credentials-i-should-not-be-able-to-log-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I visit the application",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"test.user222@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Welcome222\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see and error message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1063499800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 288879200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user222@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_username(String)"
});
formatter.result({
  "duration": 67971600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome222",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_password(String)"
});
formatter.result({
  "duration": 81784300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 7214743400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_and_error_message()"
});
formatter.result({
  "duration": 117915900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_close_the_browser()"
});
formatter.result({
  "duration": 717022600,
  "status": "passed"
});
});