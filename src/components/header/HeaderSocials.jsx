import "remixicon/fonts/remixicon.css";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <ul className="social-icons">
                <li>
                    <a className="aLnkd" href="https://www.linkedin.com/in/eduard-ferney-cruz-ospina/" target="_blank" rel="noreferrer noopener"><i className="lnkd icons ri-linkedin-box-fill"></i></a>
                </li>
                <li>
                    <a className="aGthb" href="https://github.com/Dev-eCorp" target="_blank" rel="noreferrer noopener"><i className="gthb icons ri-github-fill"></i></a>
                </li>
                <li>
                    <a className="aWspp" href="https://wa.link/3dj9gk" target="_blank" rel="noreferrer noopener"><i className="wspp icons ri-whatsapp-line"></i></a>
                </li>
                <li>
                    <a className="aInst" href="https://www.instagram.com/bug.buster_" target="_blank" rel="noreferrer noopener"><i className="inst icons ri-instagram-line"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderSocials;