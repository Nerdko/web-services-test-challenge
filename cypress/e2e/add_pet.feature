Feature:add a pet to the system
user wants to add a pet to the sytem for future user
Scenario:
Given a fixture with the body json, uri and pet data
When client sends the expected comunication to the server
And the responce is a success
Then comunication json should match expected result