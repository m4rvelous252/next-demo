describe("Language Changer", () => {
	beforeEach(() => {
		// Visit the home page before each test
		cy.visit("http://localhost:3000");
	});

	it("changes the language to Vietnamese", () => {
		// Open the language select dropdown
		cy.get('[data-testid="language-select-trigger"]').click();

		// Select the Vietnamese option
		cy.get('[data-testid="language-select-item-vi"]').click();

		// Check that the language has been changed to Vietnamese
		cy.get('[data-testid="language-select-value"]').should(
			"contain",
			"Tiếng Việt"
		);
	});

	it("changes the language to English", () => {
		// Open the language select dropdown
		cy.get('[data-testid="language-select-trigger"]').click();

		// Select the English option
		cy.get('[data-testid="language-select-item-en"]').click();

		// Check that the language has been changed to English
		cy.get('[data-testid="language-select-value"]').should(
			"contain",
			"English"
		);
	});
});
