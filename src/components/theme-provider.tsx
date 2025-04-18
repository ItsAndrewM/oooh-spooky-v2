import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { Attribute } from "next-themes";

export function ThemeProvider({
	children,
	defaultTheme,
	enableSystem,
	disableTransitionOnChange,
	attribute,
}: {
	children: React.ReactNode;
	defaultTheme: "system" | "dark" | "light";
	enableSystem: boolean;
	disableTransitionOnChange: boolean;
	attribute: Attribute;
}) {
	return (
		<NextThemeProvider
			attribute={attribute}
			defaultTheme={defaultTheme}
			enableSystem={enableSystem}
			disableTransitionOnChange={disableTransitionOnChange}
		>
			{children}
		</NextThemeProvider>
	);
}
