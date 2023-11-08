import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import { useEffect } from "react";

function AuthPage({ name, title, children, buttonTitle, onSubmit, isSend, setIsError, isError, isValid }) {

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    const navigate = useNavigate()

    return (
        <main className="main">
            <section className="login">
                <img
                    className="login__logo"
                    src={logo}
                    alt="Логотип"
                    onClick={() => navigate('/')}
                />
                <h1 className="login__title">{title}</h1>
                <form className="login__form"
                    name={`login_type_${name}`}
                    noValidate=""
                    onSubmit={onSubmit}>
                    {children}
                    {!isError ? "" : <span className="login__error">Что-то пошло не так...</span>}
                    <button className={'login__button'}
                        disabled={isValid}
                        type="submit"> {isSend ? '...' : buttonTitle} </button>
                    {name === "register" ?
                        <span className="login__note">Уже зарегистрированы? <Link to={"/signin"} className="login__link"> Войти </Link> </span>
                        : <span className="login__note">Еще не зарегистрированы? <Link to={"/signup"} className="login__link"> Регистрация </Link> </span>}
                </form>
            </section>
        </main>
    )
}

export default AuthPage;