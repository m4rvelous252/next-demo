import { Product } from "@/app/[locale]/product/ApiProduct";

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div>
			<h1>{product.title}</h1>
		</div>
	);
};

export default ProductCard;
