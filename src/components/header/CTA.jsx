// import CVEng from "../../assets/pdf/EnglishCurriculumEduardFerneyCruzOspina.pdf";
// import CVEsp from "../../assets/pdf/CurriculumEduardFerneyCruzOspina.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
    const [t] = useTranslation("global");
    const linkCVEng = "https://drive.google.com/file/d/1o_rA88mYDZF_5YKuapFVMM6k6JiL8b_K/view?usp=sharing";
    const linkCVEsp = "https://drive.google.com/file/d/1YfuAi5HohSn-cgHJSOp9eCJdTpo19G79/view?usp=sharing";
    return (
        <div className="cta">
            <a href={t("header.cta.cvOption") == "CVEng" ? linkCVEng : linkCVEsp} download className="btn" target="_blank">{t("header.cta.cv")}</a>
            <a href="#contact" className="btn btn-primary">{t("header.cta.contact")}</a>
        </div>
    )
}

export default CTA;