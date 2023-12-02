Cypress.Commands.add("petCrudeJson", (method, uri, pet, status) => {
  cy.fixture("pet_crude.json").then((crude) => {
    //Getting the json format from a fixture for ease of update and ease of reading the request
    crude.id = 0;
    crude.category.id = pet.category.id;
    crude.category.name = pet.category.name;
    crude.name = pet.name;
    crude.tags[0].id = pet.tag.id;
    crude.tags[0].name = pet.tag.name;
    crude.status = status;

    cy.request({
      method: method,
      url: uri,
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: crude,
    });
  });
});
