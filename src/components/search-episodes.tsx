"use client";

import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export const SearchEpisodes = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const [query] = useDebounce(search, 500);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length > 2) {
			setSearch(value);
		} else {
			setSearch("");
		}
	};

	useEffect(() => {
		if (query) {
			router.push(`/episodes?search=${query}`);
		}
	}, [query, router]);

	return (
		<Card className="w-full p-1">
			<div className="flex items-center gap-2 relative">
				<Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
				<Input
					type="text"
					placeholder="Search episodes"
					className="border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-8"
					onChange={handleOnChange}
				/>
			</div>
		</Card>
	);
};
