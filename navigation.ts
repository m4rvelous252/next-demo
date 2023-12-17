import {
	Pathnames,
	createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

export const locales = ["en", "vi"] as const;

export const pathnames = {
	"/": "/",
	"/product1": "product1",
	"/product2": "product2",
	"/product3": "product3",
	"/product4": "product4",
	"/product5": "product5",
	"/product6": "product6",
	"/product7": "product7",
	"/product8": "product8",
	"/product9": "product9",
	"/product10": "product10",
	"/product11": "product11",
	"/product12": "product12",
	"/product13": "product13",
	"/product14": "product14",
	"/product15": "product15",
	"/product16": "product16",
	"/product17": "product17",
	"/product18": "product18",
	"/product19": "product19",
	"/product20": "product20",
	"/product21": "product21",
	"/product22": "product22",
	"/product23": "product23",
	"/product24": "product24",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createLocalizedPathnamesNavigation({ locales, pathnames });
