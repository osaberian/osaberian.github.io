import React from "react";

import Image from "next/image";
import githubIcon from "../../public/images/github-mark-white.png";
import contactIcon from "../../public/images/contact-icon.png";
import instagramIcon from "../../public/images/instagram-icon.png";

export default function NavigatorLink({
	href,
	text,
	icon = "",
	target = "_blank",
	sub = false,
}) {
	return (
		<a
			href={href}
			target={target}
			className={
				"flex gap-2 cursor-pointer font-bold text-foregroundDark text-lg font-victormono hover:underline transition-all duration-200 w-fit justify-center items-center text-nowrap" +
				(sub ? " text-sm" : "")
			}
		>
			{icon !== "" && (
				<Image
					src={
						icon == "github"
							? githubIcon
							: icon == "mail"
							? contactIcon
							: icon == "instagram"
							? instagramIcon
							: icon
					}
					width={18}
					height={18}
					alt=""
				/>
			)}
			{text}
		</a>
	);
}
