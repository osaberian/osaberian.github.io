"use client";
import React, { useRef } from "react";

import Image from "next/image";

import MainTitle from "@/components/MainTitle";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import ProjectButtons from "@/components/ProjectButtons";
import Navigator from "@/components/Navigator";

import portfolioWebsiteThumbnail from "../../../../public/images/portfolio-website-thumbnail.png";

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
			<section className="flex relative justify-center items-center w-full h-screen">
				<motion.div
					style={{ y: backgroundY }}
					className="w-full h-full absolute"
				>
					<Image
						src={portfolioWebsiteThumbnail}
						className="w-full h-full object-cover"
						alt=""
					/>
				</motion.div>
				<motion.div
					style={{ y: foregroundY }}
					className="flex relative w-full h-full bg-black bg-opacity-80 justify-evenly items-center flex-col"
				>
					<MainTitle title="Portfolio Website" />
					<ProjectButtons githubLink="https://github.com/osaberian/osaberian.github.io" />
				</motion.div>
			</section>
			<ProjectDetailsSection description="This is the website you are currently on! It's a work in progress." />
		</main>
	);
}
