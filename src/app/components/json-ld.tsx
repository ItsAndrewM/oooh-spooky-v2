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
