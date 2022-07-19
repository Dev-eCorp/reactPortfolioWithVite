import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/images/me.webp";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [t] = useTranslation("global");
    return (
        <header>
            <div className="container header__container">
                <h5>{t("header.headerMain.hello")}</h5>
                <h1>Eduard Cruz</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">{t("header.headerMain.scroll")}</a>
            </div>
        </header>
    );
}

export default Header;