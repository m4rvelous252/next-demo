import { expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import { render } from "@/__test__/utils";

const mockProduct = {
	id: 1,
	title: "Product 1",
	brand: "Test Brand",
	price: 10,
	category: "Test Category",
	images: [
		"https://i.dummyjson.com/data/products/1/1.jpg",
		"https://i.dummyjson.com/data/products/1/2.jpg",
	],
	thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
	rating: 4.5,
	description: "Test description",
};

describe("ProductDetails", () => {
	test("renders product details correctly", () => {
		render(<ProductDetails product={mockProduct} />);

		// Assert that the product details are rendered correctly
		expect(screen.getByText("Product 1")).toBeInTheDocument();
		expect(screen.getByText("Test Brand")).toBeInTheDocument();
		expect(screen.getByText("Test Category")).toBeInTheDocument();
		expect(screen.getByText("Rating: 4.5")).toBeInTheDocument();
		expect(screen.getByText("$10")).toBeInTheDocument();
		expect(screen.getByText("Test description")).toBeInTheDocument();
	});
});
