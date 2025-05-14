"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactCard({
	icon,
	title,
	value,
	link,
	delay = 0,
}: {
	icon: React.ReactNode;
	title: string;
	value: string;
	link: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			className="soft-card p-6 soft-card-hover"
		>
			<div className="flex items-start gap-4">
				<div className="p-3 rounded-full bg-secondary text-primary">
					{icon}
				</div>
				<div>
					<h3 className="font-medium mb-1">{title}</h3>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						{value}
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	return (
		<div className="container py-20">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="mb-16 text-center"
			>
				<h1 className="text-5xl md:text-6xl font-bold mb-6">
					Me <span className="text-primary">Contacter</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
					Vous avez un projet en tête ou une opportunité à discuter ?
					N`hésitez pas à me contacter !
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="lg:col-span-2"
				>
					<div className="soft-card p-8">
						{isSubmitted ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-center py-12"
							>
								<div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold mb-2">
									Message envoyé !
								</h3>
								<p className="text-muted-foreground mb-6">
									Merci pour votre message. Je vous répondrai
									dès que possible.
								</p>
								<Button onClick={() => setIsSubmitted(false)}>
									Envoyer un autre message
								</Button>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-medium"
										>
											Nom complet
										</label>
										<Input
											id="name"
											name="name"
											placeholder="Votre nom"
											required
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-medium"
										>
											Email
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="votre@email.com"
											required
										/>
									</div>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="subject"
										className="text-sm font-medium"
									>
										Sujet
									</label>
									<Input
										id="subject"
										name="subject"
										placeholder="Sujet de votre message"
										required
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-medium"
									>
										Message
									</label>
									<Textarea
										id="message"
										name="message"
										placeholder="Votre message"
										rows={6}
										required
									/>
								</div>
								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting
										? "Envoi en cours..."
										: "Envoyer le message"}
									{!isSubmitting && (
										<Send className="ml-2 h-4 w-4" />
									)}
								</Button>
							</form>
						)}
					</div>
				</motion.div>

				<div className="space-y-6">
					<ContactCard
						icon={<Mail className="h-6 w-6" />}
						title="Email"
						value="moslehyassine0@gmail.com"
						link="mailto:moslehyassine0@gmail.com"
						delay={0.1}
					/>
					<ContactCard
						icon={<Phone className="h-6 w-6" />}
						title="Téléphone"
						value="(+33)7 63 92 01 74"
						link="tel:+33763920174"
						delay={0.2}
					/>
					<ContactCard
						icon={<MapPin className="h-6 w-6" />}
						title="Localisation"
						value="Grenoble, France"
						link="https://maps.google.com/?q=Grenoble,France"
						delay={0.3}
					/>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="soft-card p-6 mt-8"
					>
						<h3 className="font-medium mb-2">Disponibilité</h3>
						<p className="text-muted-foreground">
							Je suis généralement disponible du lundi au
							vendredi, de 9h à 18h. Je m`efforce de répondre à
							tous les messages dans les 24 heures.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
