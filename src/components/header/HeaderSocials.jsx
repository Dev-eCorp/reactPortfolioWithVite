import "remixicon/fonts/remixicon.css";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <ul className="social-icons">
                <li>
                    <a href="https://www.linkedin.com/in/eduard-ferney-cruz-ospina/" target="_blank" rel="noreferrer noopener"><i className="lnkd ri-linkedin-box-fill"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Dev-eCorp" target="_blank" rel="noreferrer noopener"><i className="gthb ri-github-fill"></i></a>
                </li>
                <li>
                    <a href="https://wa.link/3dj9gk" target="_blank" rel="noreferrer noopener"><i className="wspp ri-whatsapp-line"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/bug.buster_" target="_blank" rel="noreferrer noopener"><i className="inst ri-instagram-line"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderSocials;