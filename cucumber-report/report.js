$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Accounts.feature");
formatter.feature({
  "line": 1,
  "name": "As a user , I should be able to verify and create accounts",
  "description": "",
  "id": "as-a-user-,-i-should-be-able-to-verify-and-create-accounts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create Account using Data Table",
  "description": "",
  "id": "as-a-user-,-i-should-be-able-to-verify-and-create-accounts;create-account-using-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sprint1"
    },
    {
      "line": 3,
      "name": "@smoketest"
    },
    {
      "line": 3,
      "name": "@accounts"
    }
  ]
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
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I create and save the Account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Account Number",
        "Account Site",
        "Active",
        "Annual Revenue",
        "Account Source"
      ],
      "line": 11
    },
    {
      "cells": [
        "Waqas 123",
        "12345",
        "www.codegator.us",
        "Yes",
        "100000",
        "Web"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the \"Edit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the following values for the \"00N2E00000D7LOy\" field",
  "rows": [
    {
      "cells": [
        "--None--"
      ],
      "line": 15
    },
    {
      "cells": [
        "No"
      ],
      "line": 16
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the following values for the \"AccountSource\" field",
  "rows": [
    {
      "cells": [
        "--None--"
      ],
      "line": 19
    },
    {
      "cells": [
        "Web"
      ],
      "line": 20
    },
    {
      "cells": [
        "Phone Inquiry"
      ],
      "line": 21
    },
    {
      "cells": [
        "Partner Referral"
      ],
      "line": 22
    },
    {
      "cells": [
        "Purchased List"
      ],
      "line": 23
    },
    {
      "cells": [
        "Other"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1684938000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 505037700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 90548600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 76539300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 105881900,
  "status": "passed"
});
formatter.match({
  "location": "AccountsTest.I_create_and_save_the_Account(DataTable)"
});
formatter.result({
  "duration": 4136931900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 13
    }
  ],
  "location": "AccountsTest.I_click_the_button(String)"
});
formatter.result({
  "duration": 222172900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00N2E00000D7LOy",
      "offset": 43
    }
  ],
  "location": "AccountsTest.I_should_see_the_following_values_for_the_field(String,DataTable)"
});
formatter.result({
  "duration": 78811400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountSource",
      "offset": 43
    }
  ],
  "location": "AccountsTest.I_should_see_the_following_values_for_the_field(String,DataTable)"
});
formatter.result({
  "duration": 94957000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 704397900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test the login functionality",
  "description": "As an authenticated user I should be able to login to the application",
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
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1095105300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 1347974600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 52179300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 63811600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 800200400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard()"
});
formatter.result({
  "duration": 701448900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 655809600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Using valid credentials I should be able to login2",
  "description": "",
  "id": "test-the-login-functionality;using-valid-credentials-i-should-be-able-to-login2",
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
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1095717300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 1117912400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 76139400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 63141800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 807183100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard()"
});
formatter.result({
  "duration": 819306500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 694285500,
  "status": "passed"
});
});