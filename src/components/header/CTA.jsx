import CV from '../../assets/pdf/CV_Eduard_Ferney_Cruz_Ospina.pdf'
import { useTranslation } from 'react-i18next';

const CTA = () => {
    const [t] = useTranslation("global");
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>{t("header.cta.cv")}</a>
            <a href="#contact" className='btn btn-primary'>{t("header.cta.contact")}</a>
        </div>
    )
}

export default CTA;