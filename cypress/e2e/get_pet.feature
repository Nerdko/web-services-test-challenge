Feature: Get pet data by pet ID
User wants to search all data from a known pet ID
Scenario:
Given a pet created in the system
When user request information by providing the pet ID
Then pet information should match pet created