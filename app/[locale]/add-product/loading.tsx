import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
	return (
		<div className='flex flex-col gap-4'>
			<Skeleton className='w-full h-[220px]' />
			<div className='flex gap-2'>
				<Skeleton className='w-[100px] h-[30px]' />
				<Skeleton className='w-[100px] h-[30px]' />
			</div>
			<Skeleton className='w-32 h-8' />
			<Skeleton className='w-24 h-6' />
		</div>
	);
};

export default loading;
