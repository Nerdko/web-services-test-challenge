import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const dog = Cypress.env("dog");
const stat = Cypress.env("status");
const addPetUri = Cypress.env("add_pet_uri");
const method = "POST";
let petId = 0;
let response = {};
Given('Data for the creation communication template', () => {
    console.log("pet json: " + dog);
    console.log("pet status: " + stat);
    console.log("pet endpoint uri: " + addPetUri);
    console.log("metod to call on the enpoint: " + method);
});

When('Client sends the request', () => {
    cy.petCrudeJson(method, addPetUri, dog, stat).then((resp) => {
        petId = resp.body.id;
        response = resp;
      });
});

And('Comunication returns a success', () => {
    expect(response.status).to.eq(200)
});

Then('Comunication json matches expected result', () => {
    cy.fixture("pet_crude.json").then((crude) => {
        crude.id = petId;
        crude.category.id = dog.category.id;
        crude.category.name = dog.category.name;
        crude.name = dog.name;
        crude.tags[0].id = dog.tag.id;
        crude.tags[0].name = dog.tag.name;
        crude.status = status;
  
        expect(response.body).to.deep.eq(crude);
      });
});