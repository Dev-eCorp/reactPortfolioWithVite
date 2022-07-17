import React from 'react';
import './footer.css';
import {
    BsLinkedin,
    BsGithub,
    BsInstagram,
    BsWhatsapp
} from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation("global");
    return (
        <footer>
            <a href="/#" className='footer__logo'>dev_ecorp</a>
            <ul className='permalinks'>
                <li>
                    <a href="/#">{t("footer.home")}</a>
                </li>
                <li>
                    <a href="#about">{t("footer.about")}</a>
                </li>
                <li>
                    <a href="#experience">{t("footer.experience")}</a>
                </li>
                <li>
                    <a href="#portfolio">{t("footer.portfolio")}</a>
                </li>
                <li>
                    <a href="#contact">{t("footer.contact")}</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/eduard-ferney-cruz-ospina/" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
                <a href="https://github.com/Dev-eCorp" target="_blank" rel="noreferrer noopener"><BsGithub /></a>
                <a href="https://wa.link/3dj9gk" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
                <a href="https://www.instagram.com/bug.buster_" target="_blank" rel="noreferrer noopener"><BsInstagram /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; {t("footer.copy")}</small>
            </div>
        </footer>
    );
}

export default Footer;