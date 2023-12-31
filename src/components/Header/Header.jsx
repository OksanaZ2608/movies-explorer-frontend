import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.svg';
import menu from '../../images/menu.svg';
import close from '../../images/close.svg';
import { useState } from 'react';

function Header({ name }) {

    const navigate = useNavigate()

    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={name === "main" ? "header" : "header header_theme_white"}>
            <img
                className={!menuActive ? "header__logo" : "header__logo_locked"}
                src={logo}
                alt="Логотип"
                onClick={() => navigate('/')}
            />

            {name === "main" ?
                <nav className='header__menu header__menu_theme_horizontal'>
                    <Link to={"/signup"} className="header__link">Регистрация</Link>
                    <button className="header__button" type="button" onClick={() => navigate('/signin')} >Войти</button>
                </nav> :
                <>
                    <nav className={!menuActive ? "header__menu" : "header__menu header__menu_active header__menu_opened"} >
                    <img
                                className={menuActive ? "header__menu-close header__menu-close_active" : "header__menu-close"}
                                src={close}
                                alt="Закрыть"
                                onClick={() => setMenuActive(!menuActive)}
                            />
                        <ul className={!menuActive ? 'header__navtab' : "header__navtab header__navtab_active"}>
                            <li className='header__navtab-item'>
                                <Link to={"/"} className={menuActive ? "header__link header__link_theme_vertical" : "header__link"}>Главная</Link></li>
                            <li className='header__navtab-item'>
                                <Link to={"/movies"} className={menuActive ? "header__link header__link_theme_vertical" : "header__link"}>Фильмы</Link></li>
                            <li className='header__navtab-item'>
                                <Link to={"/saved-movies"} className={menuActive ? "header__link header__link_theme_vertical" : "header__link"}>Сохранённые фильмы</Link></li>
                            <li className='header__navtab-item'>
                                <div className='header__account'>
                                    <Link to={"/profile"} className={menuActive ? "header__link header__link_theme_vertical header__link_type_account" : "header__link"}>Аккаунт</Link>
                                    <div className='header__avatar'>
                                        <img
                                            className='header__icon'
                                            src={avatar}
                                            alt="Аватар" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {!menuActive ? <img
                        className="header__menu-icon"
                        src={menu}
                        alt="Меню"
                        onClick={() => setMenuActive(!menuActive)}
                    /> :
                        ""}
                </>
            }
        </header >
    )
}

export default Header;