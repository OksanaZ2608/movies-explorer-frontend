import { Link } from "react-router-dom";
import link from "../../../images/link.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__line">
                    <Link to={"https://github.com/OksanaZ2608/how-to-learn_pr_oz#как-научиться-учиться-или-вёрстка-с-0"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Статичный сайт</p></Link>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <Link to={"https://github.com/OksanaZ2608/russian-travel-oks.z"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Адаптивный сайт</p></Link>
                        <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <Link to={"https://github.com/OksanaZ2608/react-mesto-auth"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Одностраничное приложение</p></Link>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
            </ul>
        </section>
    )
}

export default Portfolio