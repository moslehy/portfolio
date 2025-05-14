"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedShapes() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<div className="absolute inset-0 grid-pattern opacity-30"></div>

			<motion.div
				className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl"
				animate={{
					x: [0, 100, -100, 0],
					y: [0, -100, 100, 0],
					scale: [1, 1.1, 0.9, 1],
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			/>

			<motion.div
				className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl"
				animate={{
					x: [0, -150, 150, 0],
					y: [0, 100, -100, 0],
					scale: [1, 0.8, 1.2, 1],
				}}
				transition={{
					duration: 25,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			/>

			<motion.div
				className="absolute w-[100px] h-[100px] rounded-full bg-primary/20 blur-xl"
				animate={{
					x: mousePosition.x - 50,
					y: mousePosition.y - 50,
				}}
				transition={{
					type: "spring",
					damping: 20,
					stiffness: 300,
					mass: 0.5,
				}}
			/>

			<motion.div
				className="absolute top-[15%] left-[10%] w-16 h-16 bg-primary/20 rounded-lg"
				animate={{
					rotate: [0, 180, 0],
					y: [0, 30, 0],
				}}
				transition={{
					duration: 15,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-[60%] left-[80%] w-20 h-20 triangle bg-purple-500/20"
				animate={{
					rotate: [0, -180, 0],
					x: [0, -40, 0],
				}}
				transition={{
					duration: 18,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-[80%] left-[20%] w-24 h-24 hexagon bg-blue-500/20"
				animate={{
					rotate: [0, 360, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-[30%] left-[70%] w-12 h-12 diamond bg-pink-500/20"
				animate={{
					rotate: [45, 225, 45],
					y: [0, -50, 0],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
}
