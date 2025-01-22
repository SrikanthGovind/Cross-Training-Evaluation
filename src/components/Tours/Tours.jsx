import style from "./Tours.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
export default function Tours() {
    return (
        <div className={style.toursContainer}>
            <div className={style.tourCards}>
                <div className={style.Card}>
                    <div className={style.tourImage}>
                        <img src="../../../assets/card2.jpeg" />
                    </div>
                    <div className={style.tourText}>
                        Our all Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque vitae velit nec arcu vehicula mollis. Nulla et magna auctor,
                        condimentum arcu sit amet, pharetra nunc.
                    </div>
                    <div className={style.tourIcons}>
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <FaTwitter />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <AiFillYoutube />
                        </div>
                    </div>
                </div>
                <div className={style.Card}>
                    <div className={style.tourHead}>
                        <p>PHOTO TOURS</p>
                    </div>
                    <div className={style.tourImage2}>
                        <img src="../../../assets/card1.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
