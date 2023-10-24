function AboutProject() {
    return (
        <section className="about-project" id="about">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__section">
                    <div className="about-project__card">
                        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__card">
                        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__chart">
                    <div className="about-project__chart-segment about-project__chart-segment_theme_dark">1 неделя</div>
                    <div className="about-project__chart-segment">4 недели</div>
                    <label className="about-project__chart-caption">Back-end</label>
                    <label className="about-project__chart-caption">Front-end</label>
                </div>
            </div>
        </section >
    )
}

export default AboutProject