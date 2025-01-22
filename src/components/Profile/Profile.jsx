import style from "./Profile.module.css";
export default function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={style.profileContent}>
                    <div className={style.profileImage}>
                        <img src="https://img.freepik.com/free-photo/people-joy-happiness-concept-horizontal-happy-cheerful-fashionable-young-brunette-african-american-woman-grinning-broadly-feeling-happy-after-good-shopping-sale_344912-1002.jpg?t=st=1737119364~exp=1737122964~hmac=cdbcddfbf97893d31b6ee122470bf2912d13d920cd2f31a1c8acd590d4fbe3b0&w=2000" />
                    </div>
                    <div className={style.profileTextHead}>
                        <h1>How to Take Amazing Photos for Beginners & Advanced</h1>
                    </div>
                    <div className={style.profileTextpara}>
                        <p>
                            Phatrev ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                            praesentium vero temporibus fugit vel impedit fuga consequuntur
                            ratione placeat, quas omnis nihil architecto minus corrupti!
                            Laborum, alias explicabo? Accusantium, nostrum! quas omnis nihil
                            architecto minus corrupti! temporibus fugit vel impedit fuga
                            consequuntur ratione placeat,
                        </p>
                    </div>
                    <div className={style.profileLink}>
                        <p>
                            Image from <a href="">Freepik</a>
                        </p>
                    </div>
                    <div className={style.profileButton}>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className={style.Gallery}>
                <img src="../../../assets/gallery.jpeg" />
            </div>
        </>
    );
}
