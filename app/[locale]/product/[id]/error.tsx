"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

const ProductDetaislError = () => {
	return (
		<div>
			<h1 className='text-xl font-semibold mb-4'>
				We do not have the product you are looking for
			</h1>
			<Button asChild variant={"link"}>
				<Link href={"/product"}>Go back to Product page ⬅️</Link>
			</Button>
		</div>
	);
};

export default ProductDetaislError;
