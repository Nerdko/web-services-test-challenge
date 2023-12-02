Feature: Modify an existing pet
User updates a pet information
Scenario:
Given a pet in the system
When client sends a put request with a pet ID
Then all the other fields should overwhrite existing values that don't match