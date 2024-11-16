import React from "react";

import ScrollButton from "./ScrollButton";
import LinkButton from "./LinkButton";

export default function ProjectButtons({ githubLink, openLink = "" }) {
	return (
		<>
			<div className="flex gap-8 justify-center items-center flex-col md:flex-row">
				<ScrollButton
					to="project details"
					displayText="SEE PROJECT DETAILS"
					icon="down-arrow"
				/>
				<LinkButton href={githubLink} text="OPEN GITHUB REPO" icon="github" />
				{openLink !== "" && (
					<LinkButton href={openLink} text="OPEN PROJECT" icon="open" />
				)}
			</div>
		</>
	);
}
