"use client";
import React, { useRef } from "react";
import MainTitle from "@/components/MainTitle";
import Image from "next/image";

import grapherThumbnail from "../../../../public/images/grapher-p5js-thumbnail.png";
import ScreenSection from "@/components/ScreenSection";
import ScrollButton from "@/components/ScrollButton";
import Seperator from "@/components/Seperator";
import LinkButton from "@/components/LinkButton";
import Navigator from "@/components/Navigator";

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
					<div className="flex gap-8 justify-center items-center flex-col md:flex-row">
						<ScrollButton
							to="details"
							displayText="SEE PROJECT DETAILS"
							icon="down-arrow"
						/>
						<LinkButton
							href="https://github.com/osaberian/grapher-p5js"
							text="OPEN GITHUB REPO"
							icon="github"
						/>
						<LinkButton
							href="https://osaberian.github.io/grapher-p5js/"
							text="OPEN PROJECT"
							icon="open"
						/>
					</div>
				</motion.div>
			</section>
			<div
				className="relative w-full h-max bg-backgroundDark z-20"
				style={{
					boxShadow: "0px -20px 50px rgba(0, 0, 0, 0.5)",
				}}
			>
				<Seperator />
				<ScreenSection name="details">
					<div className="p-20">
						<p className="text-lg md:text-xl font-victormono text-center">
							A simple graphing app made in p5.js, with options to graph up to
							three functions at once.
						</p>
					</div>
				</ScreenSection>
			</div>
		</main>
	);
}
