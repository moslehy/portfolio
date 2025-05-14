"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SubttleShapes() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<div className="absolute inset-0 line-pattern opacity-30"></div>

			<div
				className="decorative-circle w-[500px] h-[500px] bg-primary/5"
				style={{
					top: `calc(20% + ${scrollY * 0.02}px)`,
					right: `calc(10% - ${scrollY * 0.01}px)`,
				}}
			></div>

			<div
				className="decorative-circle w-[300px] h-[300px] bg-primary/5"
				style={{
					bottom: `calc(10% - ${scrollY * 0.01}px)`,
					left: `calc(5% + ${scrollY * 0.02}px)`,
				}}
			></div>

			<motion.div
				className="absolute top-[30%] left-[20%] w-16 h-16 rounded-full bg-primary/5"
				animate={{
					y: [0, 15, 0],
				}}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full bg-primary/5"
				animate={{
					y: [0, -20, 0],
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
