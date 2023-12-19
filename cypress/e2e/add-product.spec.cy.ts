describe("New Product page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/add-product");
		cy.get('input[name="username"]').type("kminchelle");
		cy.get('input[name="password"]').type("0lelplR");
		cy.get('button[type="submit"]').click();
	});

	it("should fill and submit the form and clear input after submit", () => {
		cy.get('form[data-test-id="new-product-form"]').within(() => {
			cy.get('input[id="title"]').type("Test Product");
			cy.get('input[id="brand"]').type("Test Brand");
			cy.get('input[id="price"]').type("100");
			cy.get('button[type="submit"]').click();
		});

		// Add assertions to check if the form submission was successful
		// For example, you could check if the new product appears in the product list
		cy.get("[data-test-id=new-product-title]").should(
			"contain",
			"Test Product"
		);
		cy.get("[data-test-id=new-product-brand]").should("contain", "Test Brand");
		cy.get("[data-test-id=new-product-price]").should("contain", "100");
		// Check that the form inputs are cleared
		cy.get('input[id="title"]').should("have.value", "");
		cy.get('input[id="brand"]').should("have.value", "");
		cy.get('input[id="price"]').should("have.value", "");
	});

	it("should display error message when required fields are empty", () => {
		cy.get('form[data-test-id="new-product-form"]').within(() => {
			cy.get('button[type="submit"]').click();
		});
		cy.get("[data-test-id=validation-error]").should(
			"contain",
			"This field is required"
		);
	});
});
