import React from "react";

import Image from "next/image";

import githubIcon from "../../public/images/github-mark-white.png";
import contactIcon from "../../public/images/contact-icon.png";
import instagramIcon from "../../public/images/instagram-icon.png";

export default function ContactOption({ title, href, icon = "" }) {
	return (
		<a
			className="flex flex-row justify-center items-center border-slate-600 border-2 rounded-2xl p-4 hover:shadow-2xl hover:scale-105 transition-all duration-500 gap-4"
			href={href}
		>
			{icon !== "" && (
				<Image
					src={
						icon == "mail"
							? contactIcon
							: icon == "instagram"
							? instagramIcon
							: icon == "github"
							? githubIcon
							: icon
					}
					width={27}
					height={27}
					alt=""
				/>
			)}
			<h2 className="text-base md:text-lg lg:text-xl font-victormono font-bold">
				{title}
			</h2>
		</a>
	);
}
