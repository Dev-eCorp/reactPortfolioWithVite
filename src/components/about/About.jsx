import "./about.css";
import photo from "../../assets/images/photo.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <section id="about">
      <h5>{t("about.title")}</h5>
      <h2>{t("about.subtitle")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={photo} alt="photography" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("about.content.xp1")}</h5>
              <small>{t("about.content.xp2")}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t("about.content.cl")}</h5>
              <small>5</small>
            </article>
            <article className="about__card">
              <MdOutlineLibraryAddCheck className="about__icon" />
              <h5>{t("about.content.pr1")}</h5>
              <small>{t("about.content.pr2")}</small>
            </article>
          </div>

          <p>{t("about.content.text")}</p>

          <a href="#contact" className="btn btn-primary">
            {t("about.content.contact")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
