const { Builder, By, until } = require('selenium-webdriver');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const proxy = require('selenium-webdriver/proxy');
require('dotenv').config();

// MongoDB Schema
const TrendSchema = new mongoose.Schema({
  _id: String,
  trend1: String,
  trend2: String,
  trend3: String,
  trend4: String,
  trend5: String,
  timestamp: Date,
  ip_address: String,
});
const Trend = mongoose.model('Trend', TrendSchema);

const scrapeTrends = async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setProxy(proxy.manual({
      http: process.env.proxy,
      https: process.env.proxy,
    }))
    .build();

  try {
    // Navigate to the Twitter login page
    await driver.get('https://twitter.com/login');

    // Login credentials
    const username = process.env.username;
    const password = process.env.password;





// Enter username and wait for the field to be ready
await driver.wait(until.elementLocated(By.css('input[name="text"]')), 5000); // Wait for the element
await driver.findElement(By.css('input[name="text"]')).sendKeys(username);

// Wait for the 'Next' button to be clickable and click it
// await driver.wait(until.elementIsVisible(driver.findElement(By.css('button[role="button"]'))), 5000);
// await driver.findElement(By.css('button[role="button"]')).click();

// const nextButton = await driver.wait(until.elementIsVisible(driver.findElement(By.css('button[role="button"]'))), 5000); // Wait for the button to be visible
// await nextButton.click(); // Click the button
// const nextButton = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[span[contains(text(), "Next")]]'))), 5000);
// await nextButton.click();


await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[contains(., "Next")]'))), 5000);
await driver.findElement(By.xpath('//button[contains(., "Next")]')).click();



// Debugging step: Check if the URL changes or if there is any redirect
// const currentUrl = await driver.getCurrentUrl();
// console.log("Current URL after clicking 'Next':", currentUrl);

// Wait for the page or modal to load after clicking the 'Next' button
await driver.wait(until.elementLocated(By.css('input[name="password"]')), 5000); // Adjust the selector if needed

// Enter password (only if password field is visible)
await driver.findElement(By.css('input[name="password"]')).sendKeys(password);

// Wait for the 'Log in' button to be clickable and click it
// await driver.wait(until.elementIsVisible(driver.findElement(By.css('button[role="button"]'))), 5000);
// await driver.findElement(By.css('button[role="button"]')).click();

// const nButton = await driver.wait(until.elementIsVisible(driver.findElement(By.css('button[role="button"]'))), 5000); // Wait for the button to be visible
// await nButton.click(); // Click the button
// const nextButton2 = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[span[contains(text(), "Next")]]'))), 5000);
// await nextButton2.click();

await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[contains(., "Log in")]'))), 5000);
await driver.findElement(By.xpath('//button[contains(., "Log in")]')).click();


//  //wait for login process to complete
// await driver.wait(until.elementLocated(By.css('selector_for_element_after_login')), 35000); // Adjust with actual element after login


//     const { By, until } = require('selenium-webdriver');

// // Wait for the username input to be available and enter the username
// await driver.wait(until.elementLocated(By.css('input[name="text"]')), 5000); // Wait for the element
// await driver.findElement(By.css('input[name="text"]')).sendKeys(username);

// // Wait for the 'Next' button to be clickable
// await driver.wait(until.elementIsVisible(driver.findElement(By.css('div[role="button"]'))), 5000);

// // Click the 'Next' button
// await driver.findElement(By.css('div[role="button"]')).click();

// // Wait for the potential Google sign-up modal and close it if necessary
// try {
//     await driver.wait(until.elementLocated(By.css('button[aria-label="Close"]')), 5000); // Adjust selector if needed
//     await driver.findElement(By.css('button[aria-label="Close"]')).click(); // Close Google modal if it appears
// } catch (error) {
//     console.log("No Google sign-up modal detected.");
// }

// // Wait for the next page element to be present
// await driver.wait(until.elementLocated(By.xpath('//element_or_selector_of_next_page_element')), 10000); // Adjust the selector and timeout

// // Enter password and click the 'Log in' button
// await driver.wait(until.elementLocated(By.css('input[name="password"]')), 5000); // Wait for the password input field
// await driver.findElement(By.css('input[name="password"]')).sendKeys(password);

// // Wait for the 'Log in' button to be clickable
// await driver.wait(until.elementIsVisible(driver.findElement(By.css('div[role="button"]'))), 5000);
// await driver.findElement(By.css('div[role="button"]')).click();

// // Wait for the login process to complete and for the post-login element to be present
// await driver.wait(until.elementLocated(By.css('selector_for_element_after_login')), 10000); // Replace with actual post-login element




    // await driver.wait(until.elementLocated(By.css('input[name="text"]')), 5000); // Wait for the element
    // await driver.findElement(By.css('input[name="text"]')).sendKeys(username);


    //   // Enter username
    //  // await driver.findElement(By.name('text')).sendKeys(username);

    //   // Wait for the 'Next' button to be clickable
    //   await driver.wait(until.elementIsVisible(driver.findElement(By.css('div[role="button"]'))), 5000);

    //   // Click the 'Next' button
    //   await driver.findElement(By.css('div[role="button"]')).click();

    //   // Wait for the next page element to be present (adjust as necessary)
    //   await driver.wait(until.elementLocated(By.xpath('//element_or_selector_of_next_page_element')), 10000); // Adjust selector and timeout





    //   // Enter username and click 'Next' button
    //   await driver.findElement(By.name('text')).sendKeys(username);

    //   // Wait for the 'Next' button to be clickable
    //   await driver.wait(until.elementIsVisible(driver.findElement(By.css('div[role="button"]'))), 5000);
    //   await driver.findElement(By.css('div[role="button"]')).click();


    //   // Wait for the password input box to appear
    //   await driver.wait(until.elementLocated(By.css('input[name="password"]')), 5000); // Adjust the selector if needed

    //   // Enter password
    //   await driver.findElement(By.css('input[name="password"]')).sendKeys(password);

    //   // Click the 'Log in' button
    //   await driver.wait(until.elementIsVisible(driver.findElement(By.css('div[role="button"]'))), 5000);
    //   await driver.findElement(By.css('div[role="button"]')).click();

    //   // Wait for login process to complete (adjust to an element that's present after login)
    //   await driver.wait(until.elementLocated(By.css('selector_for_element_after_login')), 10000); // Replace with actual post-login element


    // // Enter username and click 'Next' button
    // await driver.findElement(By.name('text')).sendKeys(username);
    // await driver.findElement(By.css('div[role="button"]')).click();
    // await driver.sleep(2000); // Wait for page to load

    // // Enter password and click 'Log in' button
    // await driver.findElement(By.name('password')).sendKeys(password);
    // await driver.findElement(By.css('div[role="button"]')).click();
    // await driver.sleep(5000); // Allow login process to complete

    // Navigate to the trending section


     //wait for login process to complete
    await driver.wait(until.elementLocated(By.css('button[aria-label="Account menu"]')  ), 10000); // Adjust with actual element after login

    await driver.get('https://x.com/explore/tabs/keyword');
    await driver.sleep(5000); // Allow the trending section to load

    // Locate trending topics
    // const trends = await driver.findElements(By.css('[data-testid="trend"]'));

    // // Extract and save top 5 trending topics
    // const trendingTopics = await Promise.all(
    //   trends.slice(0, 5).map(async (trend) => {
    //     const topic = await trend.findElement(By.css('div[dir="ltr"] span')).getText();
    //     return topic;
    //   })
    // );


    const trends = await driver.findElements(By.css('[data-testid="trend"]'));

    // Extract and save top 5 trending topics
    const trendingTopics = await Promise.all(
      trends.slice(0, 5).map(async (trend) => {
        // Find the span elements within the trend div
        const spans = await trend.findElements(By.css('div[dir="ltr"] span'));
        
        // Filter spans to get only those containing a hashtag or a dollar sign
        const topic = (await Promise.all(
          spans.map(async (span) => {
            const text = await span.getText();
            // Check if the text starts with '#' (hashtag) or '$' (finance symbol)
            return (text.startsWith('#') || text.startsWith('$')) ? text : null;
          })
        )).filter(Boolean)[0]; // Get the first non-null value

        return topic;
      })
    );

//     // Locate trending topics
// const trends = await driver.findElements(By.css('[data-testid="trend"]'));

// // Extract and save top 5 trending topics
// const trendingTopics = await Promise.all(
//   trends.slice(0, 5).map(async (trend) => {
//     // Extract the category (e.g., Politics, Finance)
//     const category = await trend.findElement(By.css('div[dir="ltr"] span')).getText();
    
//     // Extract the topic (e.g., #DelhiElections2025, $bitcoin, etc.)
//     let topic = await trend.findElement(By.css('div[dir="ltr"] + div')).getText();

//     // If the topic has a hashtag or mention, handle it accordingly
//     if (topic.includes('#') || topic.includes('$')) {
//       topic = topic.trim();
//     }

//     // Return the formatted result with category and topic
//     return `${category} \n${topic}`;
//   })
// );


    // Create a new record in MongoDB
    const record = new Trend({
      _id: uuidv4(),
      trend1: trendingTopics[0],
      trend2: trendingTopics[1],
      trend3: trendingTopics[2],
      trend4: trendingTopics[3],
      trend5: trendingTopics[4],
      timestamp: new Date(),
      ip_address: 'us-ca.proxymesh.com', // Example IP address from the proxy
    });

    // Save record to MongoDB
    await record.save();
    console.log('Trends saved to MongoDB:', record);

    return record;
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await driver.quit(); // Close the browser after execution
  }
};

module.exports = scrapeTrends;

