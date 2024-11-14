import React from "react";

import { motion, useScroll, useTransform } from "motion/react";

export default function MainTitle({ title, delay = 0, switchDir = false }) {
	const { scrollYProgress } = useScroll({
		offset: ["start start", "end start"],
	});

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		switchDir ? ["0vw", "-250vw"] : ["0vw", "250vw"]
	);

	const rotate = useTransform(
		scrollYProgress,
		[0, 1],
		switchDir ? ["0deg", "-180deg"] : ["0deg", "180deg"]
	);

	return (
		<h1 className="font-sixtyfour text-4xl md:text-7xl lg:text-9xl mb-10 text-center tracking-tighter -z-20">
			{title.split("").map((letter, index) => (
				<motion.span
					key={index}
					className="inline-block"
					animate={{
						scale: [0, 1.2, 1],
						y: [-1000, 60, 0],
						opacity: [0, 1],
					}}
					transition={{
						duration: 0.4,
						delay: index * 0.1 + delay,
						ease: "easeOut",
					}}
					style={{
						x: x,
						rotate: rotate,
					}}
				>
					<motion.span
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.4 }}
						className="inline-block"
					>
						{letter}
					</motion.span>
				</motion.span>
			))}
		</h1>
	);
}
