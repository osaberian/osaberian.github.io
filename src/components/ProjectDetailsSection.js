import React from "react";

import ScreenSection from "@/components/ScreenSection";
import Seperator from "@/components/Seperator";

export default function ProjectDetailsSection({ description }) {
	return (
		<div
			className="relative w-full h-max bg-backgroundDark z-20"
			style={{
				boxShadow: "0px -20px 50px rgba(0, 0, 0, 0.5)",
			}}
		>
			<Seperator />
			<ScreenSection name="project details">
				<div className="p-20">
					<h3 className="font-bold text-foregroundDark text-lg font-victormono text-center">
						Description
					</h3>
					<p className="text-lg md:text-xl font-victormono text-center">
						{description}
					</p>
				</div>
			</ScreenSection>
		</div>
	);
}
