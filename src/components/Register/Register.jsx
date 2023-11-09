import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import { EMAIL_PATTERN, USERNAME_PATTERN } from '../../constants/constants';

function Register({ onRegister, isSend, isError, setIsError}) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameFormError, setNameFormError] = useState(" ");
    const [emailFormError, setEmailFormError] = useState(" ");
    const [passwordFormError, setPasswordFormError] = useState(" ");

    function isFormValid() {
        return !(nameFormError.length === 1 && 
        emailFormError.length === 1 && 
        passwordFormError.length === 1 && 
        userName.length !== 0 && 
        email.length !== 0 && 
        password.length !== 0);
    }

    const inputs =
        [{
            type: "text",
            name: "username",
            id: "username",
            placeholder: "Имя",
            required: true,
            value: userName || "",
            pattern: USERNAME_PATTERN,
            onChange: (evt) => {
                setIsError(false)
                setUserName(evt.target.value);
                setNameFormError(evt.target.validationMessage || " ")
            },
            errorMesage: nameFormError,
            key: 1
        },
        {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "E-mail",
            required: true,
            value: email || "",
            pattern: EMAIL_PATTERN,
            onChange: (evt) => {
                setIsError(false)
                setEmail(evt.target.value);
                setEmailFormError(evt.target.validationMessage || " ")
            },
            errorMesage: emailFormError,
            key: 2
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
            key: 3
        }]


    function handleRegister(e) {
        e.preventDefault();

        onRegister({
            username: userName,
            email: email,
            password: password
        })
    }


    return (
        < AuthPage
            name="register"
            title="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            onSubmit={handleRegister}
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
                        pattern = {pattern}
                    />
                    <div className="login__error" key={key + 2}>{errorMesage || " "}</div>

                </div>
            })
            }
        </AuthPage >)
}

export default Register