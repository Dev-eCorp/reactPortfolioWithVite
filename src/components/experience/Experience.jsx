import React from "react";
import "./experience.css";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiVite,
    SiNextdotjs,
    SiGo,
    SiPython,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiLinux
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const front = [
    {
        id: 1,
        icon: <SiHtml5/>,
        title: "HTML",
        lvl: "experience.lvl3"
    },
    {
        id: 2,
        icon: <SiCss3/>,
        title: "CSS",
        lvl: "experience.lvl2"
    },
    {
        id: 3,
        icon: <SiJavascript/>,
        title: "JavaScript",
        lvl: "experience.lvl2"
    },
    {
        id: 4,
        icon: <SiReact/>,
        title: "ReactJS",
        lvl: "experience.lvl2"
    },
    {
        id: 5,
        icon: <SiVite/>,
        title: "Vite",
        lvl: "experience.lvl1"
    },
    {
        id: 6,
        icon: <SiNextdotjs/>,
        title: "NextJS",
        lvl: "experience.lvl1"
    }
]

const back = [
    {
        id: 1,
        icon: <SiNodedotjs/>,
        title: "NodeJS",
        lvl: "experience.lvl2"
    },
    {
        id: 2,
        icon: <SiLinux/>,
        title: "Linux",
        lvl: "experience.lvl2"
    },
    {
        id: 3,
        icon: <SiGo/>,
        title: "Golang",
        lvl: "experience.lvl2"
    },
    {
        id: 4,
        icon: <SiMongodb/>,
        title: "MongoDB",
        lvl: "experience.lvl2"
    },
    {
        id: 5,
        icon: <SiMysql/>,
        title: "MySQL",
        lvl: "experience.lvl2"
    },
    {
        id: 6,
        icon: <SiPython/>,
        title: "Python",
        lvl: "experience.lvl1"
    }
]

const Experience = () => {
    const [t] = useTranslation("global");
    return (
        <section id="experience">
            <h5>{t("experience.title")}</h5>
            <h2>{t("experience.subtitle")}</h2>
            <div className="container experience__container">
                <div className="experience__front">
                    <h3>{t("experience.front.title")}</h3>
                    <div className="experience__content">
                        {
                            front.map(({ id, icon, title, lvl }) => {
                                return (
                                    <article key={id} className="experience__details">
                                        <div className="experience__details-icon">{icon}</div>
                                        <div>
                                            <h4>{title}</h4>
                                            <small className="text-light">{t(lvl)}</small>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="experience__back">
                    <h3>{t("experience.back.title")}</h3>
                    <div className="experience__content">
                        {
                            back.map(({ id, icon, title, lvl }) => {
                                return (
                                    <article key={id} className="experience__details">
                                        <div className="experience__details-icon">{icon}</div>
                                        <div>
                                            <h4>{title}</h4>
                                            <small className="text-light">{t(lvl)}</small>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
