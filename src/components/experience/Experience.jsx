import React from "react";
import "./experience.css";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiVite,
	SiNextdotjs,
	SiTypescript,
	SiBootstrap,
	SiSass,
	SiTailwindcss,
	SiRedux,
	SiGatsby,
	SiGraphql,
	SiWebpack,
	SiJest,
	SiStorybook,
	SiStrapi,
	SiGit,
	SiGithub,
	SiJirasoftware,
	SiAstro,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const front = [
	{
		id: 1,
		icon: <SiHtml5 />,
		title: "HTML",
		lvl: "experience.lvl3",
	},
	{
		id: 2,
		icon: <SiCss3 />,
		title: "CSS",
		lvl: "experience.lvl3",
	},
	{
		id: 3,
		icon: <SiJavascript />,
		title: "JavaScript",
		lvl: "experience.lvl3",
	},
	{
		id: 4,
		icon: <SiReact />,
		title: "ReactJS",
		lvl: "experience.lvl3",
	},
	{
		id: 5,
		icon: <SiNextdotjs />,
		title: "NextJS",
		lvl: "experience.lvl3",
	},
	{
		id: 6,
		icon: <SiTypescript />,
		title: "TypeScript",
		lvl: "experience.lvl2",
	},

	{
		id: 7,
		icon: <SiBootstrap />,
		title: "Bootstrap",
		lvl: "experience.lvl2",
	},
	{
		id: 8,
		icon: <SiSass />,
		title: "SASS",
		lvl: "experience.lvl2",
	},
	{
		id: 9,
		icon: <SiTailwindcss />,
		title: "Tailwind",
		lvl: "experience.lvl2",
	},
	{
		id: 10,
		icon: <SiRedux />,
		title: "Redux",
		lvl: "experience.lvl2",
	},
	{
		id: 11,
		icon: <SiGatsby />,
		title: "Gatsby",
		lvl: "experience.lvl2",
	},
	{
		id: 12,
		icon: <SiGraphql />,
		title: "GraphQL",
		lvl: "experience.lvl2",
	},
	{
		id: 13,
		icon: <SiWebpack />,
		title: "Webpack",
		lvl: "experience.lvl2",
	},
	{
		id: 14,
		icon: <SiJest />,
		title: "Jest",
		lvl: "experience.lvl2",
	},
	{
		id: 15,
		icon: <SiStorybook />,
		title: "Storybook",
		lvl: "experience.lvl2",
	},
	{
		id: 16,
		icon: <SiStrapi />,
		title: "Strapi",
		lvl: "experience.lvl2",
	},
	{
		id: 17,
		icon: <SiGit />,
		title: "Git",
		lvl: "experience.lvl2",
	},
	{
		id: 18,
		icon: <SiGithub />,
		title: "GitHub",
		lvl: "experience.lvl2",
	},
	{
		id: 19,
		icon: <SiJirasoftware />,
		title: "Jira",
		lvl: "experience.lvl2",
	},
	{
		id: 20,
		icon: <SiVite />,
		title: "Vite",
		lvl: "experience.lvl2",
	},
];

const Experience = () => {
	const [t] = useTranslation("global");
	return (
		<section id="experience">
			<h5>{t("experience.title")}</h5>
			<h2>{t("experience.subtitle")}</h2>
			<div className="container experience__container">
				<div className="experience__front">
					{/* <h3>{t("experience.front.title")}</h3> */}
					<div className="experience__content">
						{front.map(({ id, icon, title, lvl }) => {
							return (
								<article key={id} className="experience__details">
									<div className="experience__details-icon">{icon}</div>
									<div className="experience__details-text">
										<h4>{title}</h4>
										<small className="text-light">{t(lvl)}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
