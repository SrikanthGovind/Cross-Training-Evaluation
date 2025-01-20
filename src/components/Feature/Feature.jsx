import style from "./Feature.module.css";
export default function Feature() {
  return (
    <div className={style.featureContainer}>
    <div className={style.featureWrapper}>

      <div className={style.Wrapperdiv}>
        <p>
          The Emotions and slow philosophy as the root where the essence of each
          project originates
        </p>
        <div className={style.featureLink}>
          <p>
            Image from <a href="">Freepik</a>
          </p>
        </div>
        <div className={style.featureButton}>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
    <div className={style.featureBgdiv}></div>
      <div className={style.featureImage}>
         <img  src="../../../assets/selfie.jpeg" />
        </div>
    </div>
  );
}
