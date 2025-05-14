"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
	title: "À propos de moi",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus id ex lobortis porttitor sit amet at tellus. Aliquam sollicitudin neque molestie turpis cursus aliquam.",
	info: [
		{
			fieldName: "Nom",
			fieldValue: "Yassine Mosleh",
		},
		{
			fieldName: "Téléphone",
			fieldValue: "(+33)7 63 92 01 74",
		},
		{
			fieldName: "Expérience",
			fieldValue: "2+ ans",
		},
		{
			fieldName: "Nationalité",
			fieldValue: "Français",
		},
		{
			fieldName: "Email",
			fieldValue: "moslehyassine0@gmail.com",
		},
		{
			fieldName: "Langages",
			fieldValue: "Français, Anglais",
		},
	],
};

const experience = {
	title: "Mon expérience",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus id ex lobortis porttitor sit amet at tellus. Aliquam sollicitudin neque molestie turpis cursus aliquam.",
	items: [
		{
			company: "Komugi SAS",
			position: "Full stack developper & QA manager",
			duration: "2022 - 2024",
		},
		{
			company: "Collège Jean Zay",
			position: "AED en preprofessionalisation",
			duration: "2021 - 2022",
		},
		{
			company: "Indépendant",
			position: "Professeur de Mathématiques",
			duration: "Les étés",
		},
	],
};

const education = {
	title: "Mes formations",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus id ex lobortis porttitor sit amet at tellus. Aliquam sollicitudin neque molestie turpis cursus aliquam.",
	items: [
		{
			institution: "Université Grenoble Alpes",
			degree: "Master MIAGE",
			duration: "2022 - 2024",
		},
		{
			institution: "Université Grenoble Alpes",
			degree: "Licence MIAGE",
			duration: "2021 - 2022",
		},
		{
			institution: "Université Grenoble Alpes",
			degree: "Licence IMA",
			duration: "2018 - 2021",
		},
	],
};

const skills = {
	title: "Mes compétences",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus id ex lobortis porttitor sit amet at tellus. Aliquam sollicitudin neque molestie turpis cursus aliquam.",
	skillsList: [
		{
			icon: <FaHtml5 className="text-orange-500" />,
			name: "HTML 5",
		},
		{
			icon: <FaCss3 className="text-blue-500" />,
			name: "CSS 3",
		},
		{
			icon: <FaJs className="text-yellow-500" />,
			name: "JavaScript",
		},
		{
			icon: <FaReact className="text-cyan-500" />,
			name: "React.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "Next.js",
		},
		{
			icon: <SiTailwindcss className="text-sky-500" />,
			name: "Tailwind CSS",
		},
		{
			icon: <FaNodeJs className="text-green-500" />,
			name: "Node.js",
		},
		{
			icon: <FaFigma className="text-purple-500" />,
			name: "Figma",
		},
	],
};

export default function ProfilePage() {
	return (
		<div className="container py-20">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="mb-16 text-center"
			>
				<h1 className="text-5xl md:text-6xl font-bold mb-6">
					Mon <span className="text-primary">Profil</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
					Découvrez mon parcours, mes compétences et mes formations
					qui ont façonné ma carrière de développeur.
				</p>
			</motion.div>

			<Tabs defaultValue="experience" className="w-full">
				<TabsList className="bg-secondary p-1 rounded-full mb-16 mx-auto flex w-fit">
					<TabsTrigger
						value="experience"
						className="rounded-full px-6 py-2"
					>
						Expérience
					</TabsTrigger>
					<TabsTrigger
						value="education"
						className="rounded-full px-6 py-2"
					>
						Formation
					</TabsTrigger>
					<TabsTrigger
						value="skills"
						className="rounded-full px-6 py-2"
					>
						Compétences
					</TabsTrigger>
					<TabsTrigger
						value="about"
						className="rounded-full px-6 py-2"
					>
						À propos
					</TabsTrigger>
				</TabsList>

				<TabsContent value="experience" className="space-y-12">
					<div className="space-y-6">
						<div className="space-y-2 text-center max-w-2xl mx-auto">
							<h2 className="text-3xl md:text-4xl font-bold text-primary">
								{experience.title}
							</h2>
							<p className="text-muted-foreground">
								{experience.description}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
							{experience.items.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.1,
										duration: 0.5,
									}}
									className="soft-card p-8 soft-card-hover"
								>
									<div className="text-primary text-sm mb-4 font-medium">
										{item.duration}
									</div>
									<h3 className="text-xl font-semibold mb-2">
										{item.position}
									</h3>
									<p className="text-muted-foreground">
										{item.company}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="education" className="space-y-12">
					<div className="space-y-6">
						<div className="space-y-2 text-center max-w-2xl mx-auto">
							<h2 className="text-3xl md:text-4xl font-bold text-primary">
								{education.title}
							</h2>
							<p className="text-muted-foreground">
								{education.description}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
							{education.items.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.1,
										duration: 0.5,
									}}
									className="soft-card p-8 soft-card-hover"
								>
									<div className="text-primary text-sm mb-4 font-medium">
										{item.duration}
									</div>
									<h3 className="text-xl font-semibold mb-2">
										{item.degree}
									</h3>
									<p className="text-muted-foreground">
										{item.institution}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="skills" className="space-y-12">
					<div className="space-y-6">
						<div className="space-y-2 text-center max-w-2xl mx-auto">
							<h2 className="text-3xl md:text-4xl font-bold text-primary">
								{skills.title}
							</h2>
							<p className="text-muted-foreground">
								{skills.description}
							</p>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
							{skills.skillsList.map((skill, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.05,
										duration: 0.5,
									}}
									className="soft-card p-8 text-center hover-translate"
								>
									<div className="text-5xl mb-4 mx-auto">
										{skill.icon}
									</div>
									<p className="font-medium">{skill.name}</p>
								</motion.div>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="about" className="space-y-12">
					<div className="space-y-6">
						<div className="space-y-2 text-center max-w-2xl mx-auto">
							<h2 className="text-3xl md:text-4xl font-bold text-primary">
								{about.title}
							</h2>
							<p className="text-muted-foreground">
								{about.description}
							</p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="soft-card p-8 mt-12"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
								{about.info.map((item, index) => (
									<div
										key={index}
										className="flex items-center gap-4"
									>
										<span className="text-muted-foreground min-w-[120px]">
											{item.fieldName}:
										</span>
										<span className="font-medium">
											{item.fieldValue}
										</span>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
