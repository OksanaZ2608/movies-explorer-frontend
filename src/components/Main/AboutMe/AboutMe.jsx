import { Link } from "react-router-dom";
import photo from "../../../images/myPhoto.jpg"

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__card">
                    <h3 className="about-me__name">Загороднева Оксана</h3>
                    <p className="about-me__details">Студентка Практикума, 31 год</p>
                    <p className="about-me__description">Я из Республики Коми. В 18 лет переехала в Рязань учиться в РГУ им С.А. Есенина, здесь и осталась жить.
                        У меня есть муж, 2-е детей и кот. Работаю на муниципальном предприятии, увлекаюсь творчеством, недавно начала кодить.
                        Для себя пока не решила, хочу ли я дальше развиваться в программировании.</p>
                    <Link to={"https://github.com/OksanaZ2608"} className="about-me__link" target="_blank">Github</Link>
                </div>
                <img className="about-me__photo" src={photo} alt="Моя фотография" />
            </div>
        </section>
    )
}

export default AboutMe
