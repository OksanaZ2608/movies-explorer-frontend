function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <p className='footer__year'>&copy; 2023</p>
                <ul className="footer__links">
                    <li className='footer__string'>
                        <a href="https://practicum.yandex.ru/"
                            className="footer__link"
                            target="blank">Яндекс.Практикум</a></li>
                    <li className='footer__string'>
                        <a href="https://github.com/"
                            className="footer__link"
                            target="blank">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;