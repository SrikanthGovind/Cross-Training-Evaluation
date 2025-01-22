import style from "./context.module.css";
export default function Context() {
    return (
        <div className={style.contextContainer}>
            <div className={style.contextHeader}>
                <div className={style.contextText}>
                    <h1>
                        Photo <span>Studio</span>
                    </h1>
                </div>
                <p className={style.contextPara}>
                    Dictum nisl ut eros luctus, non bibendum sapien varius. Nulla et magna
                    auctor, condimentum pharetra nunc.
                </p>
                <div className={style.contextLink}>
                    <p>
                        Image from <a href="">Freepik</a>
                    </p>
                </div>
                <div className={style.contextButton}>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className={style.contextImages}>
                <div className={style.contextImage}>
                    <img src="../../../assets/mainpage.jpeg" />
                </div>
            </div>
        </div>
    );
}
