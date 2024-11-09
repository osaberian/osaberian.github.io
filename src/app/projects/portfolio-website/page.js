"use client";
import React from "react";
import Image from "next/image";

import ScreenSection from "@/components/ScreenSection";
import ScrollButton from "@/components/ScrollButton";
import LinkButton from "@/components/LinkButton";
import MainTitle from "@/components/MainTitle";
import Seperator from "@/components/Seperator";

import portfolioWebsiteThumbnail from "../../../../public/images/portfolio-website-thumbnail.png";
import Navigator from "@/components/Navigator";

export default function Page() {
	return (
		<main>
			<Navigator />
			<section className="flex justify-center items-center w-full h-screen">
				<Image
					src={portfolioWebsiteThumbnail}
					className="absolute -z-20 w-full h-full object-cover"
					alt=""
				/>
				<div className="flex w-full h-full bg-black bg-opacity-80 justify-evenly items-center flex-col">
					<MainTitle title="Portfolio Website" />
					<div className="flex gap-8 justify-center items-center flex-col md:flex-row">
						<ScrollButton
							to="details"
							displayText="SEE PROJECT DETAILS"
							icon="down-arrow"
						/>
						<LinkButton
							href="https://github.com/osaberian/osaberian.github.io"
							text="OPEN GITHUB REPO"
							icon="github"
						/>
					</div>
				</div>
			</section>
			<Seperator />
			<ScreenSection name="details">
				<div className="p-20">
					<p className="text-lg md:text-xl font-victormono text-center">
						This is the website you are currently on! It&apos;s a work in
						progress.
					</p>
				</div>
			</ScreenSection>
		</main>
	);
}
