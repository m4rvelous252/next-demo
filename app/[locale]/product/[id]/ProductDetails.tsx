import { Product } from "@/lib/types/product.type";
import Image from "next/image";

const ProductDetails = ({
	product: {
		title,
		brand,
		price,
		category,
		images,
		thumbnail,
		rating,
		description,
	},
}: {
	product: Product;
}) => {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='md:w-1/2 p-4'>
				<Image src={thumbnail!} alt={title} width={500} height={500} />
				<div className='mt-4 grid grid-cols-3 gap-2'>
					{images!.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`${title} ${index}`}
							width={100}
							height={100}
							className='inline-block mr-2'
						/>
					))}
				</div>
			</div>
			<div className='md:w-1/2 p-4'>
				<h2 className='text-2xl font-bold mb-2'>{title}</h2>
				<h3 className='text-xl mb-2'>{brand}</h3>
				<p className='text-gray-500 mb-2'>{category}</p>
				<p className='text-gray-500 mb-2'>Rating: {rating}</p>
				<p className='text-2xl font-bold mb-2'>${price}</p>
				<p className='mb-2'>{description}</p>
			</div>
		</div>
	);
};

export default ProductDetails;
