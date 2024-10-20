"use client";
import MainTitle from "@/components/MainTitle";
import ScrollButton from "@/components/ScrollButton";
import Seperator from "@/components/Seperator";
import ScreenSection from "@/components/ScreenSection";
import ProjectCard from "@/components/ProjectCard";

import tictactoeThumbnail from "./images/tic-tac-toe-thumbnail.png";
import ContactOption from "@/components/ContactOption";

export default function Home() {
	return (
		<main>
			<section className="flex justify-evenly items-center h-screen flex-col">
				<MainTitle title="Omi08" />
				<p className="text-lg md:text-xl font-victormono text-center w-5/6 md:w-1/2">
					Welcome to Omi08&apos;s Portfolio! You can see my projects and find
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
						githubHref={"https://github.com/omi08/tic-tac-toe-p5js"}
						href={"https://omi08.github.io/tic-tac-toe-p5js/"}
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
						content="Omi08"
						href="https://github.com/omi08"
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
