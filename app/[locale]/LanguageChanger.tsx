"use client";

import { useRouter, usePathname } from "@/navigation";
import { ChangeEvent } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";

export default function LanguageChanger({ locale }: { locale: string }) {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<Select
			value={locale}
			onValueChange={(value) => router.push(pathname, { locale: value })}>
			<SelectTrigger
				className='w-[180px]'
				data-testid='language-select-trigger'>
				<SelectValue
					data-testid='language-select-value'
					placeholder='Language'
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='en' data-testid='language-select-item-en'>
					English
				</SelectItem>
				<SelectItem value='vi' data-testid='language-select-item-vi'>
					Tiếng Việt
				</SelectItem>
			</SelectContent>
		</Select>
	);
}
