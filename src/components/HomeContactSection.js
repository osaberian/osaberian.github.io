import React from "react";

import ScreenSection from "@/components/ScreenSection";
import ContactOption from "@/components/ContactOption";

export default function HomeContactSection() {
	return (
		<>
			<ScreenSection name="contact">
				<div className="flex flex-col gap-8 p-20 sm:px-14 md:px-56 lg:px-72">
					<ContactOption
						title="Email"
						href="mailto:omeedsaberian@gmail"
						icon="mail"
					/>
					<ContactOption
						title="GitHub"
						href="https://github.com/osaberian"
						icon="github"
					/>
					<ContactOption
						title="Instagram"
						href="https://www.instagram.com/omeedsaberian/"
						icon="instagram"
					/>
				</div>
			</ScreenSection>
		</>
	);
}
