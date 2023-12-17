/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.dummyjson.com",
			},
		],
	},
};
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl(nextConfig);
