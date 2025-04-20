import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PodcastListSkeleton() {
	// Create an array of 3 items to render skeleton cards
	const skeletonItems = Array.from({ length: 3 }, (_, i) => i);

	return (
		<div className="space-y-6 podcast-list">
			{skeletonItems.map((index) => (
				<Card key={index} className="overflow-hidden podcast-list-item">
					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/4 lg:w-1/5 bg-muted p-4 flex items-center justify-center">
							<div className="aspect-square w-full max-w-[200px] relative rounded-md overflow-hidden flex items-center justify-center">
								<Skeleton className="h-full w-full" />
							</div>
						</div>
						<div className="md:w-3/4 lg:w-4/5 p-6">
							<CardHeader className="p-0 pb-4">
								<Skeleton className="h-7 w-3/4" />
								<Skeleton className="h-5 w-1/3 mt-2" />
							</CardHeader>
							<CardContent className="p-0 pb-4">
								<div className="space-y-2">
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-2/3" />
								</div>
							</CardContent>
							<CardFooter className="p-0 flex flex-wrap gap-3">
								<Skeleton className="h-10 w-28" />
								<Skeleton className="h-10 w-28" />
							</CardFooter>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}
