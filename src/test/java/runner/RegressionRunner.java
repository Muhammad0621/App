package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features="feature",
		glue="stepDefinition",
		monochrome=true,
		dryRun = false,
		plugin= {
				"pretty",
				 "html:target/cucumber-reports/cucumber-html",
	             "json:target/cucumber-reports/cucumber.json"
		},
		tags= {"@regression"})
public class RegressionRunner {
	

}



