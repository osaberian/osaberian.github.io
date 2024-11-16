"use client";
import React, { useRef } from "react";

import Image from "next/image";

import MainTitle from "@/components/MainTitle";
import Navigator from "@/components/Navigator";
import ProjectButtons from "@/components/ProjectButtons";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";

import grapherThumbnail from "../../../../public/images/grapher-p5js-thumbnail.png";

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
				className="flex justify-centecr items-center w-full h-screen"
			>
				<motion.div
					style={{ y: backgroundY }}
					className="w-full h-full absolute"
				>
					<Image
						src={grapherThumbnail}
						className="w-full h-full object-cover"
						alt=""
					/>
				</motion.div>
				<motion.div
					style={{ y: foregroundY }}
					className="flex relative w-full h-full bg-black bg-opacity-80 justify-evenly items-center flex-col"
				>
					<MainTitle title="Grapher p5.js" />
					<ProjectButtons
						githubLink="https://github.com/osaberian/grapher-p5js"
						openLink="https://osaberian.github.io/grapher-p5js/"
					/>
				</motion.div>
			</section>
			<ProjectDetailsSection description="A simple graphing app made in p5.js, with options to graph up to three functions at once." />
		</main>
	);
}
