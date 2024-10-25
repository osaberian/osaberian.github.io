"use client";
import MainTitle from "@/components/MainTitle";
import ScrollButton from "@/components/ScrollButton";
import Seperator from "@/components/Seperator";
import ScreenSection from "@/components/ScreenSection";
import ProjectCard from "@/components/ProjectCard";
import ContactOption from "@/components/ContactOption";

import tictactoeThumbnail from "./images/tic-tac-toe-thumbnail.png";
import portfolioWebsiteThumbnail from "./images/portfolio-website-thumbnail.png";

export default function Home() {
	return (
		<main>
			<section className="flex justify-evenly items-center h-screen flex-col">
				<MainTitle title="Omeed Saberian" />
				<p className="text-lg md:text-xl font-victormono text-center w-5/6 md:w-1/2">
					Welcome to Omeed&apos;s Portfolio! You can see my projects and find
					contact information here. This website is still a work in progress!
				</p>
				<div className="flex gap-8">
					<ScrollButton to="projects" />
					<ScrollButton to="contact" />
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
						href={"https://osaberian.github.io/tic-tac-toe-p5js/"}
					/>
					<ProjectCard
						title="Portfolio Website"
						description="This is the website you are currently looking at! It's still a work in progress, but you can see my projects and find contact information here."
						imageSource={portfolioWebsiteThumbnail}
						githubHref={"https://github.com/osaberian/osaberian.github.io"}
						href={"https://osaberian.github.io/"}
					/>
				</div>
			</ScreenSection>
			<Seperator />
			<ScreenSection name="contact">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
					<ContactOption
						title="Email"
						content="omeedsaberian@gmail.com"
						href="mailto:omeedsaberian@gmail"
					/>
					<ContactOption
						title="GitHub"
						content="osaberian"
						href="https://github.com/osaberian"
					/>
					<ContactOption
						title="Instagram"
						content="omeedsaberian"
						href="https://www.instagram.com/omeedsaberian/"
					/>
				</div>
			</ScreenSection>
		</main>
	);
}
