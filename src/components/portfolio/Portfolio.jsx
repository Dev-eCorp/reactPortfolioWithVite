import React from "react";
import "./portfolio.css";
import piratehub from "../../assets/images/piratehub.webp";
import tetristorm from "../../assets/images/tetristorm.webp";
import toys from "../../assets/images/toys.webp";
import usersCrud from "../../assets//images/usersCrud.webp";
import notesApp from "../../assets/images/notes_app.jpeg";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    image: piratehub,
    title: "Piratehub",
    github: "https://github.com/Dev-eCorp/PirateHub",
    demo: "https://piratehub.netlify.app/",
  },
  {
    id: 2,
    image: tetristorm,
    title: "Tetristorm",
    github: "https://github.com/Dev-eCorp/Tetristorm",
    demo: "https://tetristorm.netlify.app/",
  },
  {
    id: 3,
    image: toys,
    title: "Toys",
    github: "https://github.com/Dev-eCorp/ecommerce-users-public",
    demo: "https://toyssb.netlify.app/",
  },
  {
    id: 4,
    image: usersCrud,
    title: "Crud Users Mongo",
    github: "https://github.com/Dev-eCorp/crudUsersWithLogin",
    demo: "https://crud-users-mongo.herokuapp.com/documentation/#/",
  },
  {
    id: 5,
    image: notesApp,
    title: "Notes App",
    github: "https://pastebin.com/GBiYnc3p",
    demo: "https://frontend-ensolvers-notes-8phym6aa6-dev-ecorp.vercel.app/",
  },
  //   {
  //     id: 6,
  //     image: tetristorm,
  //     title: "Tetristorm",
  //     github: "https://github.com/Dev-eCorp/Tetristorm",
  //     demo: "https://tetristorm.netlify.app/",
  //   },
];

const Portfolio = () => {
  const [t] = useTranslation("global");
  return (
    <section id="portfolio">
      <h5>{t("portfolio.title")}</h5>
      <h2>{t("portfolio.subtitle")}</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github !== "" && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                )}
                {demo !== "" && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {t("portfolio.demo")}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
