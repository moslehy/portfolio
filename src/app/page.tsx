"use client";

import type React from "react";

import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaReact, FaNodeJs, FaJava, FaPhp, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiSymfony } from "react-icons/si";
import { useState } from "react";

const skills = [
	{ icon: <FaJava className="text-orange-500" />, name: "Java" },
	{ icon: <FaPhp className="text-blue-500" />, name: "Php" },
	{ icon: <SiSymfony className="text-sky-500" />, name: "Symfony" },
	{ icon: <FaAngular className="text-yellow-500" />, name: "Angular" },
	{ icon: <FaReact className="text-cyan-500" />, name: "React" },
	{ icon: <SiNextdotjs />, name: "Next.js" },
	{ icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
];

const stats = [
	{ value: "1+", label: "Années d'expérience" },
	{ value: "5+", label: "Projets réalisés" },
	{ value: "Bac +5", label: "Etudes" },
];

function AnimatedButton({
	children,
	icon,
	href,
	variant = "default",
}: {
	children: React.ReactNode;
	icon: React.ReactNode;
	href?: string;
	variant?: "default" | "outline";
}) {
	const [isHovered, setIsHovered] = useState(false);

	const buttonContent = (
		<motion.div
			className={`relative overflow-hidden rounded-lg ${
				variant === "default"
					? "bg-primary text-primary-foreground"
					: "bg-transparent border border-primary text-foreground"
			} px-6 py-3 font-medium`}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			whileHover={{
				scale: 1.03,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			{variant === "default" && (
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
					initial={{ x: "-100%" }}
					animate={{ x: isHovered ? "0%" : "-100%" }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>
			)}

			<div className="flex items-center justify-center gap-2 relative z-10">
				{variant === "outline" ? (
					<>
						{icon}
						<motion.span
							animate={{ x: isHovered ? 3 : 0 }}
							transition={{ duration: 0.2 }}
						>
							{children}
						</motion.span>
					</>
				) : (
					<>
						<motion.span
							animate={{ x: isHovered ? -3 : 0 }}
							transition={{ duration: 0.2 }}
						>
							{children}
						</motion.span>
						<motion.div
							animate={{
								x: isHovered ? 5 : 0,
								scale: isHovered ? 1.2 : 1,
							}}
							transition={{ duration: 0.2 }}
						>
							{icon}
						</motion.div>
					</>
				)}
			</div>
		</motion.div>
	);

	if (href) {
		return <Link href={href}>{buttonContent}</Link>;
	}

	return buttonContent;
}

export default function Home() {
	return (
		<div>
			<section className="container py-20 md:py-32">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div className="inline-block bg-secondary px-4 py-2 rounded-full text-sm">
							Développeur Créatif
						</div>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
							Bonjour, Je suis{" "}
							<span className="relative">
								Yassine
								<motion.span
									className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
									initial={{ width: 0, opacity: 0 }}
									animate={{ width: "100%", opacity: 1 }}
									transition={{
										delay: 0.5,
										duration: 0.8,
										ease: [0.22, 1, 0.36, 1],
									}}
								/>
							</span>
						</h1>
						<p className="text-xl text-muted-foreground max-w-md">
							Je crée des expériences numériques uniques et
							innovantes qui captivent et inspirent.
						</p>

						<div className="flex flex-wrap gap-3">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="px-4 py-2 rounded-full bg-secondary flex items-center gap-2 hover-translate"
								>
									<span className="text-lg">
										{skill.icon}
									</span>
									<span>{skill.name}</span>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<AnimatedButton
								icon={<ArrowRight className="h-5 w-5" />}
								href="/contact"
							>
								Me contacter
							</AnimatedButton>

							<AnimatedButton
								icon={<Download className="h-5 w-5" />}
								variant="outline"
							>
								Télécharger mon CV
							</AnimatedButton>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="relative">
							<div className="soft-shape-alt overflow-hidden w-[350px] h-[350px] mx-auto border-4 border-background subtle-float">
								<Image
									src="/placeholder.svg?height=400&width=400"
									alt="Yassine Mosleh"
									width={400}
									height={400}
									className="object-cover"
									priority
								/>
							</div>

							<div className="absolute -bottom-6 right-0 soft-card p-3 shadow-md">
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-primary rounded-full"></div>
									<span className="text-sm font-medium">
										Disponible pour travailler
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="container py-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="soft-card p-8 text-center soft-card-hover"
						>
							<p className="text-4xl font-bold text-primary mb-2">
								{stat.value}
							</p>
							<p className="text-muted-foreground">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			<section className="container py-20">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold mb-4"
					>
						Projets <span className="text-primary">en vedette</span>
					</motion.h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Découvrez quelques-uns de mes projets récents qui
						démontrent mes compétences et ma créativité.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{[1, 2].map((_, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="soft-card overflow-hidden soft-card-hover"
						>
							<div className="relative aspect-video overflow-hidden">
								<Image
									src="/placeholder.svg?height=600&width=800"
									alt="Project thumbnail"
									width={800}
									height={600}
									className="object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{index === 0
										? "E-commerce UI"
										: "Système de gestion de contenu"}
								</h3>
								<p className="text-muted-foreground mb-4">
									{index === 0
										? "Interface utilisateur moderne pour une plateforme e-commerce avec panier d'achat et paiement intégré."
										: "CMS personnalisé avec authentification, gestion des rôles et éditeur WYSIWYG."}
								</p>
								<Link
									href="/projets"
									className="text-primary flex items-center gap-2 hover:underline"
								>
									Voir le projet{" "}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-12">
					<AnimatedButton
						icon={<ArrowRight className="h-5 w-5" />}
						variant="outline"
						href="/projets"
					>
						Voir tous les projets
					</AnimatedButton>
				</div>
			</section>

			<section className="container py-20">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="soft-card p-12 md:p-20 text-center relative overflow-hidden"
				>
					<div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2"></div>
					<div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-primary/5 translate-x-1/2 translate-y-1/2"></div>

					<div className="relative z-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							Prêt à{" "}
							<span className="text-primary">collaborer</span> ?
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
							Je suis toujours ouvert à discuter de nouveaux
							projets, opportunités créatives ou possibilités de
							collaboration.
						</p>
						<AnimatedButton
							icon={<ArrowRight className="h-5 w-5" />}
							href="/contact"
						>
							Discutons ensemble
						</AnimatedButton>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
