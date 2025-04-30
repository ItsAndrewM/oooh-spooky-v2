import { Metadata } from "next";
import ContactPageContainer from "@/components/contact-page-container";

export const metadata: Metadata = {
	title: "Contact Us | Oooh, Spooky Podcast",
	description:
		"Get in touch with the Oooh, Spooky podcast team. Have a spooky story to share? Want to suggest a topic? Contact us now!",
	keywords: [
		"contact",
		"Oooh Spooky contact",
		"podcast contact",
		"suggest topics",
		"spooky stories",
	],
	alternates: {
		canonical: "https://ooohspooky.com/contact",
	},
	openGraph: {
		title: "Contact Us | Oooh, Spooky Podcast",
		description:
			"Get in touch with the Oooh, Spooky podcast team. Have a spooky story to share? Want to suggest a topic? Contact us now!",
		url: "https://ooohspooky.com/contact",
		type: "website",
	},
};

export default function ContactPage() {
	const faqQuestions = [
		{
			question: "How can I support the podcast?",
			answer:
				"The best way to support us is by joining our Patreon. You'll get access to exclusive content and help us continue making the podcast.",
		},
		{
			question: "How often do you release new episodes?",
			answer:
				"We release new episodes of Oooh, Spooky every week, usually on Thursdays.",
		},
		{
			question: "Can I be a guest on the podcast?",
			answer:
				"We occasionally have guests on the podcast. If you're interested, please send us a message using the contact form with details about yourself and why you'd be a great guest.",
		},
	];

	return <ContactPageContainer faqQuestions={faqQuestions} />;
}
