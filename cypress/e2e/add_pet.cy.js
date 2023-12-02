describe("pet cycle", () => {
  const dog = Cypress.env("dog");
  const status = Cypress.env("status");
  const addPetUri = Cypress.env("add_pet_uri");
  const method = "POST";
  let createdPet = {};
  let petId = 0;
  let response = {};

  beforeEach(() => {
    cy.petCrudeJson(method, addPetUri, dog, status).then((resp) => {
      petId = resp.body.id;
      response = resp;
    });
  });

  it("Should add a new pet", () => {
    cy.fixture("pet_crude.json").then((crude) => {
      crude.id = petId;
      crude.category.id = dog.category.id;
      crude.category.name = dog.category.name;
      crude.name = dog.name;
      crude.tags[0].id = dog.tag.id;
      crude.tags[0].name = dog.tag.name;
      crude.status = status;

      expect(response.body).to.deep.eq(crude);
      return (createdPet = crude);
    });
  });

  it("Should get an existing pet", () => {
    cy.request({
      method: "GET",
      url: `${addPetUri}/${petId}`,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.body).to.deep.eq(crude);
    });
  });

  it("Should modify a pet", () => {
    crude.name = "Other Dog";
    cy.request({
      method: "PUT",
      url: addPetUri,
      body: crude,
    }),
      then((response) => {
        expect(response.body.name).to.deep.eq(crude.name);
      });
  });
});
