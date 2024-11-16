"use client";
import React from "react";

import Navigator from "./Navigator";
import AnimatedMainTitle from "./AnimatedMainTitle";
import ScrollButton from "./ScrollButton";
import Seperator from "./Seperator";

export default function HomeMainSection() {
	return (
		<>
			<Navigator />
			<section className="flex justify-evenly items-center h-screen flex-col overflow-hidden">
				<div>
					<AnimatedMainTitle title="Omeed" />
					<AnimatedMainTitle title="Saberian" delay={0.6} switchDir />
				</div>
				<p className="text-lg md:text-xl font-victormono text-center w-5/6 md:w-1/2">
					Welcome to Omeed&apos;s Portfolio! You can see my projects and find
					contact information here. This website is still a work in progress.
				</p>
				<div className="flex justify-center items-center gap-8 flex-wrap">
					<ScrollButton
						to="projects"
						displayText="SEE PROJECTS"
						icon="down-arrow"
					/>
					<ScrollButton
						to="contact"
						displayText="CONTACT INFO"
						icon="contact"
					/>
				</div>
			</section>
			<Seperator />
		</>
	);
}
