import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ProductGrid from "./ProductGrid";
import { Product } from "@/app/[locale]/product/ApiProduct";

const mockProducts = [
	{
		id: 1,
		title: "Product 1",
		price: 10,
		description: "Test description",
		thumbnail:
			"https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		brand: "Test Brand 1",
	},
	{
		id: 2,
		title: "Product 2",
		price: 20,
		description: "Test description",
		thumbnail:
			"https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		brand: "Test Brand 2",
	},
	{
		id: 3,
		title: "Product 3",
		price: 30,
		description: "Test description",
		thumbnail:
			"https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		brand: "Test Brand 3",
	},
] satisfies Product[];

describe("ProductGrid", () => {
	test("renders product cards for each product", () => {
		render(<ProductGrid products={mockProducts} />);

		// Assert that the product cards are rendered
		expect(screen.getByText("Product 1")).toBeInTheDocument();
		expect(screen.getByText("Product 2")).toBeInTheDocument();
		expect(screen.getByText("Product 3")).toBeInTheDocument();
	});

	test("renders correct number of product cards", () => {
		render(<ProductGrid products={mockProducts} />);

		// Assert that the correct number of product cards are rendered
		expect(screen.getAllByTestId("product-card")).toHaveLength(
			mockProducts.length
		);
	});
});
