import { Product } from "@/lib/types/product.type";
import ProductCard from "./ProductCard";

interface ProductGridProps {
	products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
	if (products.length === 0) return <div>No product</div>;

	return (
		<div className='grid grid-cols-auto-fit gap-4'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
