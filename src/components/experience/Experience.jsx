import React from "react";
import "./experience.css";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiVuedotjs,
    SiSvelte,
    SiGo,
    SiPython,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiPostman
} from "react-icons/si";
import { useTranslation } from "react-i18next";

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
                        <article className="experience__details">
                            <SiHtml5 className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">{t("experience.lvl3")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiCss3 className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiJavascript className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiReact className="experience__details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">{t("experience.lvl1")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiVuedotjs className="experience__details-icon" />
                            <div>
                                <h4>VueJS</h4>
                                <small className="text-light">{t("experience.lvl1")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiSvelte className="experience__details-icon" />
                            <div>
                                <h4>Svelte</h4>
                                <small className="text-light">{t("experience.lvl1")}</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__back">
                    <h3>{t("experience.back.title")}</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiNodedotjs className="experience__details-icon" />
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiPython className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiGo className="experience__details-icon" />
                            <div>
                                <h4>Golang</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMongodb className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">{t("experience.lvl1")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiPostman className="experience__details-icon" />
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">{t("experience.lvl2")}</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
