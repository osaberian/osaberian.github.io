import React from "react";

import ProjectCard from "@/components/ProjectCard";
import Seperator from "@/components/Seperator";
import ScreenSection from "./ScreenSection";

import tictactoeThumbnail from "../../public/images/tic-tac-toe-thumbnail.png";
import portfolioWebsiteThumbnail from "../../public/images/portfolio-website-thumbnail.png";
import grapherThumbnail from "../../public/images/grapher-p5js-thumbnail.png";

export default function HomeProjectSection() {
	return (
		<>
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
						description="This is the website you are currently looking at. It's still a work in progress, but you can see my projects and find contact information here."
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
		</>
	);
}
