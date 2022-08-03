import CVEng from "../../assets/pdf/EnglishCurriculumEduardFerneyCruzOspina.pdf";
import CVEsp from "../../assets/pdf/CurriculumEduardFerneyCruzOspina.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
    const [t] = useTranslation("global");
    return (
        <div className="cta">
            <a href={t("header.cta.cvOption") == "CVEng" ? CVEng : CVEsp} download className="btn">{t("header.cta.cv")}</a>
            <a href="#contact" className="btn btn-primary">{t("header.cta.contact")}</a>
        </div>
    )
}

export default CTA;