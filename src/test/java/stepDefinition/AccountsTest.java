package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import Utilities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AccountsTest extends BaseClass {
	@Given("^I open my browser$")
	public void i_open_my_browser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\amaar\\OneDrive\\Desktop\\Selenium files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@Given("^I visit my application$")
	public void i_visit_my_application() throws Throwable {
		driver.get("https://login.salesforce.com");
	}

	@Then("^I click the \"([^\"]*)\" tab$")
	public void i_click_the_tab(String arg1) {
		driver.findElement(By.xpath("//*[@id='Account_Tab']")).click();

	}

	@Then("^I click the \"([^\"]*)\" button$")
	public void i_click_the_button(String buttonName) {
		driver.findElement(By.xpath("//input[@title='" + buttonName + "']")).click();

	}

	@Then("^I enter \"([^\"]*)\" in the account name field$")
	public void i_enter_in_the_account_name_field(String AccName) {
		driver.findElement(By.xpath("//*[@id='acc2']")).sendKeys(AccName);

	}
	@Then("^I select \"([^\"]*)\" for the \"([^\"]*)\" dropdown field$")
	public void i_select_for_the_dropdown_field(String DDValue, String Active)  {
	  driver.findElement(By.xpath("//*[@id=\"00N2E00000D7LOy\"]")).click();
	  driver.findElement(By.xpath("//*[@id=\"00N2E00000D7LOy\"]/option[3]")).click();
	}

}
