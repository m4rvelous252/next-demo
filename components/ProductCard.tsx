import { Product } from "@/app/[locale]/product/ApiProduct";
import Image from "next/image";

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div
			data-testid='product-card'
			className='border p-6 rounded shadow flex flex-col'>
			<h3 className='text-xl font-semibold'>{product.title}</h3>
			<h6 className='mb-4'>{product.brand}</h6>
			{product.thumbnail ? (
				<div className='relative w-full h-48 rounded-sm overflow-hidden'>
					<Image
						alt={product.title}
						src={product.thumbnail}
						fill
						className='object-cover'
					/>
				</div>
			) : null}
			<p className='mt-4'>
				{product.price.toLocaleString("en", {
					style: "currency",
					currency: "USD",
				})}
			</p>
			<p className='mt-2'>{product.description}</p>
		</div>
	);
};

export default ProductCard;
