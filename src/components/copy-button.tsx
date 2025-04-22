"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export function CopyButton({
	url,
	className,
	children,
	asChild,
}: {
	url: string;
	className: string;
	children: React.ReactNode;
	asChild?: boolean;
}) {
	const handleClick = () => {
		navigator.clipboard.writeText(url);
		toast.success("Link copied to clipboard");
	};
	return (
		<Button onClick={handleClick} className={className} asChild={asChild}>
			{children}
		</Button>
	);
}
