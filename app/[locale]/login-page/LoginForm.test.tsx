import { fireEvent, screen, waitFor } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import LoginForm from "./LoginForm";
import { render } from "@/__test__/utils";

describe("LoginForm", () => {
	test("renders login form with input fields and submit button", () => {
		const mockSignIn = jest.fn();
		// Render the LoginForm component
		render(<LoginForm onSubmit={mockSignIn} />);

		// Assert that the title is rendered
		expect(screen.getByTestId("form-title")).toBeInTheDocument();

		// Assert that the username input field is rendered
		expect(screen.getByLabelText("Username")).toBeInTheDocument();

		// Assert that the password input field is rendered
		expect(screen.getByLabelText("Password")).toBeInTheDocument();

		// Assert that the submit button is rendered
		expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
	});

	test("calls onSubmit prop when form is submitted", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(<LoginForm onSubmit={handleSubmit} />);

		const usernameInput = getByTestId("username-input");
		const passwordInput = getByTestId("password-input");
		const submitButton = getByTestId("submit-button");

		fireEvent.change(usernameInput, { target: { value: "testuser" } });
		fireEvent.change(passwordInput, { target: { value: "testpass" } });
		fireEvent.click(submitButton);

		await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
	});
});
