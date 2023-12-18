describe("Product Page", () => {
	beforeEach(() => {
		// Visit the product page before each test
		cy.visit("http://localhost:3000/product");
		cy.get('input[name="username"]').type("kminchelle");
		cy.get('input[name="password"]').type("0lelplR");
		cy.get('button[type="submit"]').click();
	});

	it("displays the product page title", () => {
		// Check that the title is displayed
		cy.get("h1").should("contain", "Product");
	});

	it("displays the new product form", () => {
		// Check that the NewProduct component is displayed
		cy.get('[data-test-id="new-product-form"]').should("be.visible");
	});

	it("displays the api product list", () => {
		// Check that the ApiProduct component is displayed
		cy.get('[data-test-id="api-product"]').should("be.visible");
	});
});
