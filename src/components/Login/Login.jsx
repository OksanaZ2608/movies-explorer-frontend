import { useEffect, useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import { EMAIL_PATTERN } from '../../constants/constants';

function Login({ onLogin, isSend, isError, setIsError}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFormError, setEmailFormError] = useState(" ");
    const [passwordFormError, setPasswordFormError] = useState(" ");
    
    function isFormValid() {
        return !(emailFormError.length === 1 && 
        passwordFormError.length === 1 && 
        email.length !== 0 && 
        password.length !== 0);
    }
    
    useEffect(() => {
        setEmail(" ");
        setPassword("");
        setEmailFormError(" ");
        setPasswordFormError(" ");
    }, []);

    const inputs =
        [{
            type: "email",
            name: "email",
            id: "email",
            placeholder: "E-mail",
            required: true,
            value: email || " ",
            pattern: EMAIL_PATTERN,
            onChange: (evt) => {
                setIsError(false)
                setEmail(evt.target.value);
                setEmailFormError(evt.target.validationMessage || " ")
            },
            errorMesage: emailFormError,
            key: 1
        },
        {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Пароль",
            required: true,
            value: password || "",
            onChange: (evt) => {
                setIsError(false)
                setPassword(evt.target.value);
                setPasswordFormError(evt.target.validationMessage || " ")
            },
            errorMesage: passwordFormError,
            key: 2
        }]

    function handleLogin(e) {
        e.preventDefault();

        onLogin({
            email: email,
            password: password
        })
    }

    return (< AuthPage
        name="login"
        title="Рады видеть!"
        buttonTitle="Войти"
        onSubmit={handleLogin}
        isSend={isSend}
        setIsError={setIsError}
        isError={isError}
        isValid={isFormValid()}
    >
        {inputs.map(({ type, name, id, placeholder, required, value, onChange, errorMesage, key, pattern}) => {
            return <div key={key}>
                <div className="login__subtitle">{placeholder}</div>
                <input
                    className={`login__input login__input_type_${name}`}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    key={key + 1}
                    pattern={pattern}
                />
                <div className="login__error" key={key + 2}>{errorMesage || " "}</div>
            </div>
        })
        }
    </AuthPage >)
}

export default Login