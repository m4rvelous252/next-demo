import { expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import { Button } from "./button";
import { render } from "@/__test__/utils";

test("renders button with default variant and size", () => {
	render(<Button>Click me</Button>);

	const button = screen.getByText("Click me");

	// Assert that the button has the default variant class
	expect(button).toHaveClass("bg-primary");

	// Assert that the button has the default size class
	expect(button).toHaveClass("h-10");
});

test("renders button with custom variant and size", () => {
	render(
		<Button variant='secondary' size='sm'>
			Click me
		</Button>
	);

	const button = screen.getByText("Click me");

	// Assert that the button has the custom variant class
	expect(button).toHaveClass("bg-secondary");

	// Assert that the button has the custom size class
	expect(button).toHaveClass("h-9");
});

test("renders button as child component", () => {
	render(
		<Button asChild variant='link'>
			<span>Click me</span>
		</Button>
	);

	const button = screen.getByText("Click me");

	// Assert that the button is rendered as a child component
	expect(button.tagName).toBe("SPAN");

	// Assert that the child component is rendered
	expect(screen.getByText("Click me")).toBeInTheDocument();
});
