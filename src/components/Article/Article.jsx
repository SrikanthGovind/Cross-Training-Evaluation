import { useEffect } from "react";
import style from "./Article.module.css";
export default function Article() {
  function add() {
    useEffect(() => {});
  }
  add();
  return (
    <div className={style.ArticleContainer}>
      <div className={style.ArticleHeaders}>
        <h1>who</h1>
        <h2>we</h2>
        <h1>are</h1>
     </div>
              <div className={style.ArticlePara}>
        Phoserum lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Quisque vitae velit nec arcu vehicula mollis. Nulla facilisi. Nam dictum
        nisl ut eros luctus, non bibendum sapien varius. Nulla et magna auctor,
        condimentum arcu sit amet, pharetra nunc. Nam dictum nisl ut eros
        luctus, non bibendum sapien varius. Nulla et magna auctor, condimentum
        arcu sit amet, pharetra nunc.
      </div>
    </div>
  );
}
