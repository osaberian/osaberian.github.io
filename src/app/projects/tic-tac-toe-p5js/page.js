"use client";
import React, { useRef } from "react";

import Image from "next/image";

import tictactoeThumbnail from "../../../../public/images/tic-tac-toe-thumbnail.png";

import MainTitle from "@/components/MainTitle";
import Navigator from "@/components/Navigator";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import ProjectButtons from "@/components/ProjectButtons";

import { motion, useScroll, useTransform } from "motion/react";

export default function Page() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	return (
		<main>
			<Navigator />
			<section
				ref={ref}
				className="flex relative justify-center items-center w-full h-screen"
			>
				<motion.div
					style={{ y: backgroundY }}
					className="w-full h-full absolute"
				>
					<Image
						src={tictactoeThumbnail}
						className="w-full h-full object-cover"
						alt=""
					/>
				</motion.div>
				<motion.div
					style={{ y: foregroundY }}
					className="flex relative w-full h-full bg-black bg-opacity-80 justify-evenly items-center flex-col"
				>
					<MainTitle title="Tic Tac Toe p5.js" />
					<ProjectButtons
						githubLink="https://github.com/osaberian/tic-tac-toe-p5js"
						openLink="https://osaberian.github.io/tic-tac-toe-p5js/"
					/>
				</motion.div>
			</section>
			<ProjectDetailsSection description="A simple tic-tac-toe game made in p5.js, with options to play against AI or another human." />
		</main>
	);
}
