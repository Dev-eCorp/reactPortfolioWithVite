import React, { useRef } from "react";
import "./contact.css";
import {
    AiOutlineMail,
    AiOutlineWhatsApp
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
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>eduardcruz.contact@gmail.com</h5>
                        <a href="mailto:salikintres2001@gmail.com" target="_blank" rel="noreferrer noopener">{t("contact.options.mail")}</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineWhatsApp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+573006296323</h5>
                        <a href="https://wa.link/3dj9gk" target="_blank" rel="noreferrer noopener">{t("contact.options.message")}</a>
                    </article>
                    <article className="contact__option">
                        <SiDiscord className="contact__option-icon" />
                        <h4>Discord</h4>
                        <h5>#3104</h5>
                        <a href="https://discordapp.com/users/448915196220538880" target="_blank" rel="noreferrer noopener">{t("contact.options.message")}</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} autocomplete="off">
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