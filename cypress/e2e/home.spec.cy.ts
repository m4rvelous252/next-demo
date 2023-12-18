describe("Home Page", () => [
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.get('input[name="username"]').type("kminchelle");
		cy.get('input[name="password"]').type("0lelplR");
		cy.get('button[type="submit"]').click();
	}),
	it("should display the home page and greetings", () => {
		cy.get("h1").should("contain", "Authorized");
		cy.get('[data-test-id="greeting"]').should("contain", "Jeanne");
	}),
	it("should go to product page when click on link", () => {
		cy.get("a[href='/product']").click();
		cy.url().should("include", "/product");
	}),
	it("should logout when push button", () => {
		cy.get('button[type="button"]').click();
		cy.url().should("include", "/login-page");
	}),
]);
