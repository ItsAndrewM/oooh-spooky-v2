import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			new URL("https://ooohspooky.libsyn.com/**"),
			new URL("https://static.libsyn.com/**"),
		],
	},
};

export default nextConfig;
