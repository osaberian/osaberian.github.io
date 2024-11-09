"use client";

import Image from "next/image";
import React, { useState } from "react";

import menuIcon from "../../public/images/menu.png";
import NavigatorHeader from "./NavigatorHeader";
import Seperator from "./Seperator";
import NavigatorLink from "./NavigatorLink";
import SiteTitle from "./SiteTitle";

export default function Navigator() {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className="fixed top-0 left-0 z-50">
				<div className="flex flex-row justify-center items-center gap-2 p-4">
					<Image
						src={menuIcon}
						className="cursor-pointer"
						width={30}
						height={30}
						alt=""
						onClick={handleToggle}
					/>
					<SiteTitle opened={isOpen} />
				</div>
			</div>
			<div
				className={`${
					isOpen
						? "w-full md:w-1/2 lg:w-1/3 px-4 border-r-2 opacity-100"
						: "w-0 opacity-0"
				} flex pt-20 fixed transition-all duration-500 flex-col gap-2 h-screen bg-backgroundDark overflow-hidden z-40`}
			>
				<NavigatorLink href="/" text="HOME" target="_self" />
				<Seperator color="slate-600" noMargin />

				<NavigatorHeader text={"PROJECTS"} />
				<NavigatorLink
					href="/projects/tic-tac-toe-p5js"
					text="Tic Tac Toe p5.js"
					target="_self"
					sub
				/>
				<NavigatorLink
					href="/projects/portfolio-website"
					text="Portfolio Website"
					target="_self"
					sub
				/>
				<NavigatorLink
					href="/projects/grapher-p5js"
					text="Grapher p5.js"
					target="_self"
					sub
				/>

				<Seperator color="slate-600" noMargin />
				<NavigatorHeader text={"CONTACT"} />
				<NavigatorLink
					href="mailto:omeedsaberian@gmail"
					text="Email"
					sub
					icon="mail"
				/>
				<NavigatorLink
					href="https://github.com/osaberian"
					text="Github"
					target="_self"
					icon="github"
					sub
				/>
				<NavigatorLink
					href="https://www.instagram.com/omeedsaberian/"
					text="Instagram"
					target="_self"
					icon="instagram"
					sub
				/>
			</div>
		</>
	);
}
