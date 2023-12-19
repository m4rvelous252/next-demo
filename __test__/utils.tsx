import { RenderOptions, render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { ReactElement, ReactNode } from "react";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
	const useRouter = jest.spyOn(require("next/router"), "useRouter");
	const locale = "en";
	const messages = require(`../messages/${locale}.json`);

	useRouter.mockImplementationOnce(() => ({
		query: { locale: locale },
	}));

	return (
		<NextIntlClientProvider messages={messages} locale={locale}>
			{children}
		</NextIntlClientProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
