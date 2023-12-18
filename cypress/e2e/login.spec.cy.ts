describe("Login", () => {
	beforeEach(() => {
		// Visit the login page before each test
		cy.visit("http://localhost:3000/login-page");
	});

	it("log in successfully", () => {
		// Fill in the email and password fields
		cy.get('input[name="username"]').type("kminchelle");
		cy.get('input[name="password"]').type("0lelplR");

		// Click the submit button
		cy.get('button[type="submit"]').click();

		// Check that we have been redirected to the home page
		cy.url().should("include", "/");

		// Check that the login was successful
		cy.get("h1").should("contain", "Authorized");
	});

	it("shows an error message on failed login", () => {
		// Fill in the email and password fields with incorrect values
		cy.get('input[name="username"]').type("wrong@example.com");
		cy.get('input[name="password"]').type("wrongpassword");

		// Click the submit button
		cy.get('button[type="submit"]').click();

		// Check that an error message is displayed
		cy.get('[data-test-id="login-error"]').should(
			"contain",
			"Invalid username or password"
		);
	});
});
