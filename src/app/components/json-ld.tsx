import React from "react";

interface PodcastJsonLdProps {
	url: string;
	name: string;
	description: string;
	author: string;
	imageUrl: string;
}

export function PodcastJsonLd({
	url,
	name,
	description,
	author,
	imageUrl,
}: PodcastJsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "PodcastSeries",
		name,
		description,
		url,
		author: {
			"@type": "Person",
			name: author,
		},
		image: imageUrl,
		webFeed: `${url}/feed.xml`,
		keywords:
			"comedy, horror, paranormal, podcast, ghost stories, UFO, unexplained mysteries, Adam Knox, Luka Muller, Peter Jones",
		datePublished: "2018-10-01",
		contentRating: "mature",
		inLanguage: "en-AU",
		genre: "Comedy",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			availability: "https://schema.org/InStock",
		},
		publisher: {
			"@type": "Organization",
			name: "Oooh, Spooky Productions",
			logo: {
				"@type": "ImageObject",
				url: imageUrl,
			},
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

interface OrganizationJsonLdProps {
	name: string;
	url: string;
	logo: string;
	description: string;
	sameAs: string[];
}

export function OrganizationJsonLd({
	name,
	url,
	logo,
	description,
	sameAs,
}: OrganizationJsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name,
		url,
		logo,
		description,
		sameAs,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Melbourne",
			addressRegion: "Victoria",
			addressCountry: "Australia",
		},
		foundingDate: "2018",
		foundingLocation: {
			"@type": "Place",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Melbourne",
				addressRegion: "Victoria",
				addressCountry: "Australia",
			},
		},
		member: [
			{
				"@type": "Person",
				name: "Adam Knox",
				jobTitle: "Host",
				url: "https://twitter.com/OoohSpooky",
			},
			{
				"@type": "Person",
				name: "Luka Muller",
				jobTitle: "Host",
				url: "https://twitter.com/OoohSpooky",
			},
			{
				"@type": "Person",
				name: "Peter Jones",
				jobTitle: "Host",
				url: "https://twitter.com/OoohSpooky",
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

interface FAQJsonLdProps {
	questions: Array<{
		question: string;
		answer: string;
	}>;
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map((q) => ({
			"@type": "Question",
			name: q.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: q.answer,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

// Add PodcastEpisode JSON-LD component
interface PodcastEpisodeJsonLdProps {
	url: string;
	name: string;
	description: string;
	podcastName: string;
	podcastUrl: string;
	imageUrl: string;
	datePublished: string;
	duration: string;
	episodeNumber: number;
}

export function PodcastEpisodeJsonLd({
	url,
	name,
	description,
	podcastName,
	podcastUrl,
	imageUrl,
	datePublished,
	duration,
	episodeNumber,
}: PodcastEpisodeJsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "PodcastEpisode",
		url,
		name,
		datePublished,
		description,
		episodeNumber,
		timeRequired: duration,
		image: imageUrl,
		partOfSeries: {
			"@type": "PodcastSeries",
			name: podcastName,
			url: podcastUrl,
		},
		associatedMedia: {
			"@type": "MediaObject",
			contentUrl: url,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

// Add LocalBusiness JSON-LD for podcast studio
export function LocalBusinessJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Oooh, Spooky Podcast Studio",
		image: "https://ooohspooky.com/oooh-spooky.png",
		priceRange: "$$",
		description:
			"Home studio of the Oooh, Spooky comedy horror podcast featuring Adam Knox, Luka Muller, and Peter Jones.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Melbourne",
			addressRegion: "Victoria",
			addressCountry: "Australia",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: -37.8136,
			longitude: 144.9631,
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "18:00",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
