// Dependencias
import { Link } from 'react-router-dom'

// Imagenes
import Logo from '../assets/navbar/travelsWebLogo2.png'
import GifPhone from '../assets/navbar/PhoneCallWhite.gif'
import UserPlaceholder from '../assets/navbar/UserPlaceholder.jpg'

// JS
import {
    styles,
    sitios
} from '../assets/js/NavBar'

const NavBar = () => {
    return (
    <>
        <nav className={styles.navSmall}>
            <div className={styles.navTopSmall}>
                <div className={styles.divLinkLogoSmall}>
                    <Link to="/" className={styles.linkLogoSmall}>
                        <img src={Logo} alt="" className={styles.imgLogoSmall} />
                    </Link>
                </div>
                <div className={styles.divButtonCallSmall}>
                    <button className={styles.buttonCallSmall}>
                        <img src={GifPhone} alt="gifPhoneRinging" className={styles.gifButtonSmall} />
                        <p className={styles.textButtonSmall}>Llama ahora!</p>
                    </button>
                </div>
                <div className={styles.divUserPictureSmall}>
                    <img src={UserPlaceholder} alt="UserPicture" className={styles.userPictureSmall} />
                </div>
            </div>
            <div className={styles.navBottomSmall}>
                <div className={styles.divLinksSmall}>
                    {sitios.map((sitio) => (
                        <Link key={sitio.id} to={sitio.url} className={styles.linkSmall}>{sitio.nombre}</Link>
                    ))}
                </div>
            </div>
        </nav>

        <nav className={styles.navLarge}>
            <div className={styles.divLinkLogoLarge}>
                <Link to="/" className={styles.linkLogoLarge}>
                    <img src={Logo} alt="" className={styles.imgLogoLarge} />
                </Link>
            </div>
            
            <div className={styles.divLinksLarge}>
                {sitios.map((sitio) => (
                    <Link key={sitio.id} to={sitio.url} className={styles.linkLarge}>{sitio.nombre}</Link>
                ))}
            </div>

            <div className={styles.divButtonCallLarge}>
                <button className={styles.buttonCallSmall}>
                    <img src={GifPhone} alt="gifPhoneRinging" className={styles.gifButtonLarge} />
                    <p className={styles.textButtonLarge}>Llama ahora!</p>
                </button>
            </div>
            
            <div className={styles.divUserPictureLarge}>
                <img src={UserPlaceholder} alt="UserPicture" className={styles.userPictureLarge} />
            </div>
        </nav>
    </>
    );
}

export default NavBar;