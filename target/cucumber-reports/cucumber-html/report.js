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
        "Muhammad",
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
  "duration": 1602395700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 413171600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 84121100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 80783900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 789508400,
  "status": "passed"
});
formatter.match({
  "location": "AccountsTest.I_create_and_save_the_Account(DataTable)"
});
formatter.result({
  "duration": 2620761700,
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
  "duration": 227327200,
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
  "duration": 74320400,
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
  "duration": 98147300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 692205100,
  "status": "passed"
});
});