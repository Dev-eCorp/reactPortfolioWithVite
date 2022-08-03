import React, { useRef } from "react";
import "./contact.css";
import {
    AiOutlineLinkedin,
    AiOutlineInstagram
} from "react-icons/ai"
import { SiDiscord } from "react-icons/si";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [t] = useTranslation("global");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ubl9pxc", "template_5je6f1l", form.current, "PA_DkQik8hIjLHvc_");
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>{t("contact.title")}</h5>
            <h2>{t("contact.subtitle")}</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Eduard Ferney Cruz Ospina</h5>
                        <a href="https://www.linkedin.com/in/eduard-ferney-cruz-ospina/" target="_blank" rel="noreferrer noopener">{t("contact.options.message")}</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>bug_buster__</h5>
                        <a href="https://www.instagram.com/bug_buster__/" target="_blank" rel="noreferrer noopener">{t("contact.options.message")}</a>
                    </article>
                    <article className="contact__option">
                        <SiDiscord className="contact__option-icon" />
                        <h4>Discord</h4>
                        <h5>#3104</h5>
                        <a href="https://discordapp.com/users/448915196220538880" target="_blank" rel="noreferrer noopener">{t("contact.options.message")}</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} autoComplete="off">
                    <input type="text" name="name" placeholder={t("contact.form.name")} required />
                    <input type="email" name="email" placeholder={t("contact.form.email")} required />
                    <textarea name="message" rows="7" placeholder={t("contact.form.message")} required></textarea>
                    <input type="submit" className="btn btn-primary" value={t("contact.options.message")} />
                </form>
            </div>
        </section>
    )
}

export default Contact;