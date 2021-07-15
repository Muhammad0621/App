package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import Utilities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest extends BaseClass {

	@Given("^I open the browser$")
	public void i_open_the_browser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\amaar\\OneDrive\\Desktop\\Selenium files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

	}

	@Given("^I visit the application$")
	public void i_visit_the_application() {
		driver.get("https://login.salesforce.com");
		

	}

	@Given("^I enter \"([^\"]*)\" as username$")
	public void i_enter_as_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);

	}

	@Given("^I enter \"([^\"]*)\" as password$")
	public void i_enter_as_password(String password) {
driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() {
		System.out.println("I click the login button");
		driver.findElement(By.id("Login")).click();

	}

	@Then("^I should see the dashboard page$")
	public void i_should_see_the_dashboard_page() {
		boolean homePage = driver.findElement(By.xpath("//a[@title='Home Tab - Selected']")).isDisplayed();
		Assert.assertTrue(homePage);

	}

	@Then("^I close the browser$")
	public void i_close_the_browser() {
		driver.quit();

	}
	@Then("^I should see and error message$")
	public void i_should_see_and_error_message() {
		String expectedMessage = "Please check your username and password. If you still can't log in, contact your Salesforce administrator.";
	String actualMessage = driver.findElement(By.id("error")).getText();
	Assert.assertEquals(expectedMessage, actualMessage);
}
	  
	}


