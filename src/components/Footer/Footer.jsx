import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.Footer}>
      <p>
        Sample text. Click to select the text box.Click again or double click to
        start editingthe text.
      </p>
      <p>
        <a href="">Website Template</a> created with{" "}
        <a href="">Website Builder Software.</a>
      </p>
    </div>
  );
}
