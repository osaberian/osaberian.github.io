"use client";
import React from "react";

import MainTitle from "@/components/MainTitle";
import ScrollButton from "@/components/ScrollButton";
import Seperator from "@/components/Seperator";
import ScreenSection from "@/components/ScreenSection";
import ProjectCard from "@/components/ProjectCard";
import ContactOption from "@/components/ContactOption";
import Navigator from "@/components/Navigator";

import tictactoeThumbnail from "../../public/images/tic-tac-toe-thumbnail.png";
import portfolioWebsiteThumbnail from "../../public/images/portfolio-website-thumbnail.png";
import grapherThumbnail from "../../public/images/grapher-p5js-thumbnail.png";

export default function Home() {
	return (
		<main>
			<Navigator />
			<section className="flex justify-evenly items-center h-screen flex-col">
				<div>
					<MainTitle title="Omeed" />
					<MainTitle title="Saberian" delay={0.6} switchDir />
				</div>
				<p className="text-lg md:text-xl font-victormono text-center w-5/6 md:w-1/2">
					Welcome to Omeed&apos;s Portfolio! You can see my projects and find
					contact information here. This website is still a work in progress!
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
			<ScreenSection name="projects">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
					<ProjectCard
						title="Tic Tac Toe p5.js"
						description="A simple tic-tac-toe game made in p5.js, with options to play against AI or another human."
						imageSource={tictactoeThumbnail}
						githubHref={"https://github.com/osaberian/tic-tac-toe-p5js"}
						openHref={"https://osaberian.github.io/tic-tac-toe-p5js/"}
						href={"/projects/tic-tac-toe-p5js"}
					/>
					<ProjectCard
						title="Portfolio Website"
						description="This is the website you are currently looking at! It's still a work in progress, but you can see my projects and find contact information here."
						imageSource={portfolioWebsiteThumbnail}
						githubHref={"https://github.com/osaberian/osaberian.github.io"}
						href={"/projects/portfolio-website"}
					/>
					<ProjectCard
						title="Grapher p5.js"
						description="A simple graphing tool made in p5.js."
						imageSource={grapherThumbnail}
						githubHref={"https://github.com/osaberian/grapher-p5js"}
						openHref={"https://osaberian.github.io/grapher-p5js/"}
						href={"/projects/grapher-p5js"}
					/>
				</div>
			</ScreenSection>
			<Seperator />
			<ScreenSection name="contact">
				<div className="flex flex-col gap-8 p-20 sm:px-14 md:px-56 lg:px-72">
					<ContactOption
						title="Email"
						href="mailto:omeedsaberian@gmail"
						icon="mail"
					/>
					<ContactOption
						title="GitHub"
						href="https://github.com/osaberian"
						icon="github"
					/>
					<ContactOption
						title="Instagram"
						href="https://www.instagram.com/omeedsaberian/"
						icon="instagram"
					/>
				</div>
			</ScreenSection>
		</main>
	);
}
