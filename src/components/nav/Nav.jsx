import React, { useState } from "react";
import "./nav.css";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineBook,
    AiOutlineMessage
} from "react-icons/ai";
import { MdWork } from "react-icons/md";
import "flag-icons";
import { useTranslation } from "react-i18next";

const Nav = () => {
    const [t, i18n] = useTranslation("global");
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><AiOutlineBook /></a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><MdWork /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMessage /></a>
            <button className="tooltip" onClick={() => i18n.changeLanguage("es")}><p className="tooltip__text">{t("nav.es")}</p><span className="fi fi-es"></span></button>
            <button className="tooltip" onClick={() => i18n.changeLanguage("en")}><p className="tooltip__text">{t("nav.en")}</p><span className="fi fi-us"></span></button>
        </nav>
    )
}

export default Nav;