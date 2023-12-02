# web-services-test-challenge
 code challenge for test services automation
If you downloaded this package and you are not interested in evaluating my automation skills, sorry, this package is just for that.

Running automation: For running the test, please run the next command: npx cypress run

For running automation with browser open, run the next command: npx cypress run --headless:false

Test will run headless as default and report will be saved in: mochawesome-report\challenge-report.html or mochawesome-report\challenge-report.json

For changing browser or disabling headless mode please reffer to Cypress documentation for all flags

Test definition:
Test include failing tests due to issues with the API
Swagger states to user $int64 but displays java.lang errors related to the size of the number provided
This issue causes put request to fail, since the pet is not found
I added a ficture with the crude's base json format so I can worry less about hierarchy when testing and providing a better and easier way to update in the future.