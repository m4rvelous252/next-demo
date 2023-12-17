import { Product } from "@/app/[locale]/product/ApiProduct";
import ProductCard from "./ProductCard";

interface ProductGridProps {
	products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
	return (
		<div className='grid grid-cols-auto-fit gap-4'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
