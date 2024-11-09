import React from "react";

import Image from "next/image";
import githubIcon from "../../public/images/github-mark-white.png";
import openInNewIcon from "../../public/images/open-in-new-icon.png";

export default function LinkButton({
	href,
	text,
	icon = "",
	target = "_blank",
}) {
	return (
		<a
			href={href}
			target={target}
			className="flex gap-4 cursor-pointer font-bold text-foregroundDark text-lg font-victormono bg-slate-600 p-4 rounded-lg hover:bg-slate-500 transition-all duration-200 w-fit justify-center items-center"
		>
			{icon !== "" && (
				<Image
					src={
						icon == "github"
							? githubIcon
							: icon == "open"
							? openInNewIcon
							: icon
					}
					width={27}
					height={27}
					alt=""
				/>
			)}
			{text}
		</a>
	);
}
