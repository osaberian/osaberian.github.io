import React from "react";

import Image from "next/image";

import githubIcon from "../app/images/github-mark-white.png";
import openInNewIcon from "../app/images/open-in-new-icon.png";

export default function ProjectCard({
	title,
	description,
	imageSource,
	href,
	githubHref,
}) {
	return (
		<div className="flex flex-col border-slate-600 border-2 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500">
			<Image src={imageSource} className="w-full " />
			<div className="p-4">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-victormono">{title}</h3>
					<div className="flex gap-4 justify-center items-center">
						{href && (
							<a href={href} target="_blank">
								<Image src={openInNewIcon} width={27} height={27} />
							</a>
						)}
						{githubHref && (
							<a href={githubHref} target="_blank">
								<Image src={githubIcon} width={25} height={25} />
							</a>
						)}
					</div>
				</div>
				<hr className="my-2 border-slate-600 rounded-full" />
				<p className="text-sm font-victormono">{description}</p>
			</div>
		</div>
	);
}
