"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { FAQJsonLd } from "../components/json-ld";

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

	return (
		<main className="min-h-screen flex flex-col">
			<FAQJsonLd questions={faqQuestions} />
			<Header />

			<div className="container mx-auto px-4 py-12">
				<h1 className="text-5xl font-bold mb-8 text-center spooky-title text-primary">
					Contact Us
				</h1>

				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-2xl font-bold mb-6 text-primary">
								Get In Touch
							</h2>
							<p className="mb-8 text-muted-foreground">
								Have a spooky story to share? Want to suggest a topic for the
								podcast? Or just want to say hello? Fill out the form and
								we&apos;ll get back to you as soon as possible.
							</p>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<Mail className="text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold">Email</h3>
										<p className="text-muted-foreground">
											hello@ooohspooky.com
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<MessageSquare className="text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold">Social Media</h3>
										<p className="text-muted-foreground">
											Follow us on{" "}
											<a
												href="https://twitter.com/OoohSpooky"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:text-accent"
											>
												Twitter
											</a>
											,{" "}
											<a
												href="https://www.instagram.com/ooohspooky/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:text-accent"
											>
												Instagram
											</a>
											, or{" "}
											<a
												href="https://www.facebook.com/ooohspooky/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:text-accent"
											>
												Facebook
											</a>
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<MapPin className="text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold">Location</h3>
										<p className="text-muted-foreground">
											Melbourne, Australia
										</p>
									</div>
								</div>
							</div>

							<div className="mt-12 p-6 bg-black rounded-lg">
								<h3 className="text-xl font-bold mb-4 text-primary">
									Suggest a Topic
								</h3>
								<p className="text-white mb-4">
									Have a mysterious or unexplained phenomenon you&apos;d like us
									to cover on the podcast? Let us know!
								</p>
								<a
									href="#contact-form"
									className="cta-button inline-block"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("contact-form")
											?.scrollIntoView({ behavior: "smooth" });
									}}
								>
									Suggest Now
								</a>
							</div>
						</div>

						<div id="contact-form">
							<div className="bg-card border border-border rounded-lg p-6 shadow-lg">
								<h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 max-w-5xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center spooky-title text-primary">
						FAQs
					</h2>
					<div className="grid gap-6">
						<div className="bg-card border border-border rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2">
								How can I support the podcast?
							</h3>
							<p>
								The best way to support us is by joining our{" "}
								<a
									href="https://www.patreon.com/ooohspooky"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-accent"
								>
									Patreon
								</a>
								. You&apos;ll get access to exclusive content and help us
								continue making the podcast.
							</p>
						</div>

						<div className="bg-card border border-border rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2">
								How often do you release new episodes?
							</h3>
							<p>
								We release new episodes of Oooh, Spooky every week, usually on
								Thursdays.
							</p>
						</div>

						<div className="bg-card border border-border rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2">
								Can I be a guest on the podcast?
							</h3>
							<p>
								We occasionally have guests on the podcast. If you&apos;re
								interested, please send us a message using the contact form with
								details about yourself and why you&apos;d be a great guest.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
