import React from "react";

import Image from "next/image";

import githubIcon from "../../public/images/github-mark-white.png";
import openInNewIcon from "../../public/images/open-in-new-icon.png";

export default function ProjectCard({
	title,
	description,
	imageSource,
	href,
	openHref,
	githubHref,
}) {
	return (
		<div
			role="link"
			onClick={() => (window.location.href = href)}
			className="cursor-pointer flex flex-col border-slate-600 border-2 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
		>
			<Image src={imageSource} className="w-full" alt="" />
			<hr className="border-slate-600" />
			<div className="p-4">
				<div className="flex justify-between items-center">
					<h3 className="text-md font-victormono">{title}</h3>
					<div className="flex gap-4 justify-center items-center">
						{openHref && (
							<a
								href={openHref}
								target="_blank"
								onClick={(e) => e.stopPropagation()}
							>
								<Image
									src={openInNewIcon}
									width={27}
									height={27}
									alt="Open in new window"
								/>
							</a>
						)}
						{githubHref && (
							<a
								href={githubHref}
								target="_blank"
								onClick={(e) => e.stopPropagation()}
							>
								<Image
									src={githubIcon}
									width={25}
									height={25}
									alt="Github Logo"
								/>
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
