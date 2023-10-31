import link from "../../../images/link.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__line">
                    <a
                        className="portfolio__link"
                        href="https://oksanaz2608.github.io/how-to-learn_pr_oz/"
                        target="blank">
                        <p className="portfolio__name">Статичный сайт</p>
                    </a>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <a
                        className="portfolio__link"
                        href="https://oksanaz2608.github.io/russian-travel-oks.z/index.html"
                        target="blank"
                    >
                        <p className="portfolio__name">Адаптивный сайт</p>
                    </a>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <a
                        className="portfolio__link"
                        href="https://oksanaz2608.github.io/mesto/"
                        target="blank"
                    >
                        <p className="portfolio__name">Одностраничное приложение</p>
                    </a>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;