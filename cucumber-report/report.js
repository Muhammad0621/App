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
  "duration": 1710411200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 457944500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 73014600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 58481100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 846335600,
  "status": "passed"
});
formatter.match({
  "location": "AccountsTest.I_create_and_save_the_Account(DataTable)"
});
formatter.result({
  "duration": 6133887900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#acc2\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9MI9ISI\u0027, ip: \u002710.0.0.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\amaar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59050}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 597e9db7dac3076b3028b639543ce3d6\n*** Element info: {Using\u003did, value\u003dacc2}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.AccountsTest.I_create_and_save_the_Account(AccountsTest.java:38)\r\n\tat ✽.And I create and save the Account(Accounts.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1012299200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 486806800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 69952400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 62538500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 735995100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard()"
});
formatter.result({
  "duration": 660310800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 685723400,
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
  "duration": 1091115100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_the_application()"
});
formatter.result({
  "duration": 472811400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 68574300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 62644700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 783043100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard()"
});
formatter.result({
  "duration": 622989100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 672353600,
  "status": "passed"
});
});