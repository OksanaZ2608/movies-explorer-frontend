import { useContext, useEffect, useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_PATTERN } from "../../constants/constants";

function Profile({ setIsError, isError, onLogout, onUpdateUser, isSuccess, setIsSuccess }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [emailFormError, setEmailFormError] = useState(" ");

    function isFormValid() {
        return !(emailFormError.length === 1 &&
            userName.length !== 0 &&
            email.length !== 0);
    }

    function validateEmail(target) {
        if (currentUser.email === target.value) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }

    function validateUserName(userName) {
        if (currentUser.name === userName) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }

    const currentUser = useContext(CurrentUserContext);

    const inputs =
        [{
            type: "text",
            name: "username",
            id: "username",
            minLength: 2,
            maxLength: 30,
            placeholder: "Имя",
            required: true,
            value: userName || "",
            onChange: (evt) => {
                setIsError(false);
                setIsSuccess(false);
                setUserName(evt.target.value);
                validateUserName(evt.target.value);
            },
            errorMesage: '',
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
                setIsError(false);
                setIsSuccess(false);
                setEmail(evt.target.value);
                validateEmail(evt.target);
                setEmailFormError(evt.target.validationMessage || " ")
            },
            errorMesage: emailFormError,
            key: 2
        }]

    useEffect(() => {
        setUserName(currentUser.name);
        setEmail(currentUser.email);
        setEmailFormError(" ")
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            username: userName,
            email: email,
        });
    }

    return (
        <ProfileForm
            onLogout={onLogout}
            onSubmit={handleSubmit}
            setIsError={setIsError}
            isError={isError}
            setIsSucces={setIsSuccess}
            isSuccess={isSuccess}
            isEdit={isEdit}
            isValid={isFormValid()}
        >
            {inputs.map(({ type, name, id, minLength, maxLength, placeholder, required, value, onChange, key, pattern }) => {
                return <div className="profile__line" key={key}>
                    <div className="profile__cell-name">{placeholder}</div>
                    <input
                        className="profile__cell-content"
                        type={type}
                        id={id}
                        minLength={minLength}
                        maxLength={maxLength}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                        key={key + 1}
                        pattern={pattern}
                    />
                </div>

            })
            }
        </ProfileForm>
    )
}

export default Profile;