describe("Add pet", () => {
  const dog = Cypress.env("dog");
  const petId = Cypress.env("pet_id");
  const status = Cypress.env("status");
  it("add a new pet", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("add_pet_uri"),
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: {
        id: 0,
        category: {
          id: dog.category.id,
          name: dog.category.name,
        },
        name: dog.name,
        photoUrls: [],
        tags: [
          {
            id: dog.tag.id,
            name: dog.tag.name,
          },
        ],
        status: status,
      },
    }).then((response) => {
      expect(response.body).to.deep.eq({
        id: petId,
        category: {
          id: dog.category.id,
          name: dog.category.name,
        },
        name: dog.name,
        photoUrls: [],
        tags: [
          {
            id: dog.tag.id,
            name: dog.tag.name,
          },
        ],
        status: status,
      });
    });
  });
});
