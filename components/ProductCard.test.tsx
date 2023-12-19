import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

const mockProduct = {
	id: 1,
	title: "Test Product",
	brand: "Test Brand",
	thumbnail:
		"https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	price: 9.99,
	description: "Test description",
};
test("matches snapshot", () => {
	const { asFragment } = render(<ProductCard product={mockProduct} />);
	expect(asFragment()).toMatchSnapshot();
});

test("renders product card with correct data", () => {
	render(<ProductCard product={mockProduct} />);

	// Assert that the product title is rendered
	expect(screen.getByText("Test Product")).toBeInTheDocument();

	// Assert that the product brand is rendered
	expect(screen.getByText("Test Brand")).toBeInTheDocument();

	// Assert that the product image is rendered
	expect(screen.getByAltText("Test Product")).toBeInTheDocument();

	// Assert that the product price is rendered
	expect(screen.getByText("$9.99")).toBeInTheDocument();

	// Assert that the product description is rendered
	expect(screen.getByText("Test description")).toBeInTheDocument();
});

test("renders product without thumbnail", () => {
	render(<ProductCard product={{ ...mockProduct, thumbnail: undefined }} />);

	// Assert that the product image is not rendered
	expect(screen.queryByAltText("Test Product")).not.toBeInTheDocument();
});
