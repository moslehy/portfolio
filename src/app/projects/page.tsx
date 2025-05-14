"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
	{
		id: 1,
		category: "frontend",
		title: "E-commerce UI",
		description:
			"Interface utilisateur moderne pour une plateforme e-commerce avec panier d'achat et paiement intégré.",
		stack: ["HTML 5", "CSS 3", "JavaScript", "React"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
	{
		id: 2,
		category: "fullstack",
		title: "Système de gestion de contenu",
		description:
			"CMS personnalisé avec authentification, gestion des rôles et éditeur WYSIWYG.",
		stack: ["React", "Node.js", "MongoDB", "Express"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
	{
		id: 3,
		category: "frontend",
		title: "Application météo",
		description:
			"Application météo avec géolocalisation et prévisions sur 7 jours.",
		stack: ["React", "Tailwind CSS", "API OpenWeather"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
	{
		id: 4,
		category: "fullstack",
		title: "Réseau social",
		description:
			"Plateforme de réseau social avec profils, messagerie et partage de contenu.",
		stack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
	{
		id: 5,
		category: "mobile",
		title: "Application de fitness",
		description:
			"Application mobile pour suivre les entraînements et les progrès fitness.",
		stack: ["React Native", "Firebase", "Redux"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
	{
		id: 6,
		category: "backend",
		title: "API RESTful",
		description:
			"API RESTful complète avec authentification JWT et documentation Swagger.",
		stack: ["Node.js", "Express", "MongoDB", "JWT"],
		image: "/placeholder.svg?height=600&width=800",
		live: "https://example.com",
		github: "https://github.com",
	},
];

function FilterButton({
	active,
	onClick,
	children,
}: {
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			className={`px-6 py-2 rounded-full transition-all ${
				active
					? "bg-primary text-primary-foreground"
					: "bg-secondary text-foreground hover:bg-secondary/80"
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default function ProjectsPage() {
	const [category, setCategory] = useState("all");

	const filteredProjects =
		category === "all"
			? projects
			: projects.filter((project) => project.category === category);

	return (
		<div className="container py-20">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="mb-16 text-center"
			>
				<h1 className="text-5xl md:text-6xl font-bold mb-6">
					Mes <span className="text-primary">Projets</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
					Découvrez une sélection de mes projets récents, démontrant
					mes compétences en développement web et mobile.
				</p>
			</motion.div>

			<div className="flex flex-wrap justify-center gap-4 mb-16">
				<FilterButton
					active={category === "all"}
					onClick={() => setCategory("all")}
				>
					Tous
				</FilterButton>
				<FilterButton
					active={category === "frontend"}
					onClick={() => setCategory("frontend")}
				>
					Frontend
				</FilterButton>
				<FilterButton
					active={category === "backend"}
					onClick={() => setCategory("backend")}
				>
					Backend
				</FilterButton>
				<FilterButton
					active={category === "fullstack"}
					onClick={() => setCategory("fullstack")}
				>
					Fullstack
				</FilterButton>
				<FilterButton
					active={category === "mobile"}
					onClick={() => setCategory("mobile")}
				>
					Mobile
				</FilterButton>
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={category}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="soft-card overflow-hidden soft-card-hover"
						>
							<div className="relative aspect-video overflow-hidden">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									width={800}
									height={600}
									className="object-cover transition-transform duration-500 hover:scale-105"
								/>
								<div className="absolute top-4 right-4">
									<span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
										{project.category}
									</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.stack.map((tech, index) => (
										<span
											key={index}
											className="bg-secondary px-2 py-1 rounded-full text-xs"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-between">
									<Button variant="outline" size="sm" asChild>
										<Link
											href={project.github}
											target="_blank"
										>
											<Github className="mr-2 h-4 w-4" />{" "}
											Code
										</Link>
									</Button>
									<Button size="sm" asChild>
										<Link
											href={project.live}
											target="_blank"
										>
											<ExternalLink className="mr-2 h-4 w-4" />{" "}
											Demo
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mt-20 text-center"
			>
				<p className="text-muted-foreground mb-6 text-lg">
					Vous voulez voir plus de projets ou discuter d`une
					collaboration ?
				</p>
				<Button asChild size="lg">
					<Link href="/contact">
						Me contacter <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</motion.div>
		</div>
	);
}
