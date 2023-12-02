import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const dog = Cypress.env("dog");
const stat = Cypress.env("status");
const addPetUri = Cypress.env("add_pet_uri");
const method = "POST";
let petId = 0;
let response = {};
Given('Data for the new pet and creation', () => {
    console.log("pet json: " + dog);
    console.log("pet status: " + stat);
    console.log("pet endpoint uri: " + addPetUri);
    console.log("metod to call on the enpoint: " + method);
    cy.petCrudeJson(method, addPetUri, dog, stat).then((resp) => {
        
        expect(resp.status).to.eq(200)

        petId = resp.body.id;
      });
});

When('Client updates a pet by a PUT request', () => {
    crude.name = "Other Dog";
    cy.request({
      method: "PUT",
      url: addPetUri,
      body: crude,
    }).then((response) => {
        expect(response.status).to.eq(200);
        response = resp;
    });
});

Then('Response should reflect changes on the pet', () => {
    expect(response.body.name).to.deep.eq(crude.name);
});