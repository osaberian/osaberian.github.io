import React from "react";

import { Link } from "react-scroll";
import Image from "next/image";

import downArrowIcon from "../../public/images/arrow-down-icon.png";
import contactIcon from "../../public/images/contact-icon.png";

export default function ScrollButton({
	to,
	displayText = "",
	onClick = () => {},
	icon = "",
}) {
	return (
		<Link
			onClick={onClick}
			to={to}
			offset={-50}
			smooth
			duration={1000}
			className="flex cursor-pointer font-bold text-foregroundDark text-lg font-victormono bg-slate-600 p-4 rounded-lg hover:bg-transparent border-transparent border hover:border-slate-600 transition-all duration-200 w-fit justify-center items-center gap-2"
		>
			{icon !== "" && (
				<Image
					src={
						icon == "down-arrow"
							? downArrowIcon
							: icon == "contact"
							? contactIcon
							: icon
					}
					width={27}
					height={27}
					alt=""
				/>
			)}
			{displayText !== "" ? displayText : to.toUpperCase()}
		</Link>
	);
}
