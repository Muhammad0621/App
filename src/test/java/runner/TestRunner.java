package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "feature", glue = "stepDefinition", monochrome = true, plugin = { "html:cucumber-report/",
		"rerun:rerun/failed_scenario.txt" }, tags = {  })

public class TestRunner {

}
