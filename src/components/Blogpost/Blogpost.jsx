import style from "./Blogpost.module.css";
import { CiBullhorn } from "react-icons/ci";
import { LiaLaughBeam } from "react-icons/lia";
import { IoBulbOutline } from "react-icons/io5";
import { GiPikeman } from "react-icons/gi";
export default function Blogpost() {
  return (
    <div className={style.blogpostContainer}>
        <div className={style.blogHeader}>
           <h1>
          Creative <span>Portraits</span>
        </h1>
      </div>
      <div className={style.blogWrapper}>
        <div className={style.blogImage}>
          <img src="../../../assets/blogspot.jpeg" />
        </div>
        <div className={style.blogContent}>
          <div className={style.blogText}>
            <p className={style.blogTextPara}>Sample text. Click to select the text box.Click again or double click to start editingthe text.</p>
            <div className={style.blogLink}>
              <p>
                Image from <a href="">Freepik</a>
              </p>
            </div>
            <div className={style.blogButton}>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.blogCardsCon}>
          <div className={style.blogCard}>
            <div className={style.Avatar}>
            <GiPikeman />
            </div>
            <h1>Basic Courses</h1>
            <p>Dure autes Clickto select the text box.Click again or double click .</p>
          </div>
          <div className={style.blogCard}>
            <div className={style.Avatar}>
                <CiBullhorn />
            </div>
            <h1>800+ Courses</h1>
            <p>Dure autes Clickto select the text box.Click again or double click.</p>
          </div>
          <div className={style.blogCard}>
            <div className={style.Avatar}>
            <LiaLaughBeam />
            </div>
            <h1>Happiness</h1>
            <p>Dure autes Clickto select the text box.Click again or double click.</p>
          </div>
          <div className={style.blogCard}>
            <div className={style.Avatar}>
            <IoBulbOutline />
            </div>
            <h1>Art Tips</h1>
            <p>Dure autes Clickto select the text box.Click again or double click.</p>
          </div>
      </div>
    </div>
  );
}
