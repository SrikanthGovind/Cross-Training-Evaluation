import style from "./Contact.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
export default function Contact() {
  return (
    <div className={style.ContactContainer}>
      <div className={style.contactWrapper}>
      <div className={style.Wrapperdiv}>
        <div className={style.location}>
          <h1>Location</h1>
          <p>28 Jackson Blved ste 1020 chicago IL 60706-4538</p>
        </div>
        <div className={style.socialMedia}>
          <h1>FOLLOW US</h1>
          <div className={style.socialIcons}>
                            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
            <FaGooglePlusG />
            </span>
          </div>
          <div className={style.ContactLink}>
            <p>
              Image from <a href="">Freepik</a>
            </p>
          </div>
          <div className={style.copyright}>
            <p>
                <span> <AiOutlineCopyrightCircle/></span>
            2020 Privacy policy</p>
          </div>
        </div>          
      </div>
      </div>
      <div className={style.contactImage}>
        <img src="../../../assets/contact.jpeg"/>
      </div>
    </div>
  );
}
