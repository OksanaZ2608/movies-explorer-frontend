import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const [inEditMode, setInEditMode] = useState(false);

    const navigate = useNavigate();

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handleEditClick() {
        setInEditMode(true);
    }

    function handleProfileSubmit(e) {
        e.preventDefault();
        if (!email || !name) {
            setError('Имя и email не могут быть пустыми');
            return;
        }

        setError('');
    }
    return (
        <main className="main">
            <section className="profile">
                <h1 className="profile__greeting">Привет, Оксана!</h1>
                <table className="profile__table" name="profile-table" noValidate onSubmit={handleProfileSubmit}>
                    <tr className="profile__line">
                        <td
                            className="profile__cell-name"
                            type="text"
                            placeholder="Имя"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                            minLength={2}
                            maxLength={40}
                            disabled={!inEditMode}
                        >Имя</td>
                        <td className="profile__cell-content">Оксана</td>
                    </tr>
                    <tr className="profile__line">
                        <td
                            className="profile__cell-name"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            disabled={!inEditMode}
                        >Почта</td>
                        <td className="profile__cell-content">pochta@yandex.ru</td>
                    </tr>
                        <p className="profile__message">{error}</p>
                        {inEditMode ? (
                            <button
                                className="profile__save-button"
                                type="submit"
                                disabled={error !== ''}
                            >
                                Сохранить
                            </button>
                        ) : (
                            <div className='profile__buttons'>
                                <button
                                    className="profile__edit"
                                    type="button"
                                    onClick={handleEditClick}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className="profile__logout"
                                    type="button"
                                    onClick={() => navigate("/")}
                                >
                                    Выйти из аккаунта
                                </button>
                            </div>
                        )}
                </table>
            </section>
        </main>
    );
}

export default Profile;
// import { Link } from "react-router-dom";


// function Profile() {
//     return (
//         <main className="main">
//             <section className="profile">
//                 <p className="profile__greeting">Привет, Оксана!</p>
//                 <table className="profile__table">
//                     <tr className="profile__line">
//                         <td className="profile__cell-name">Имя</td>
//                         <td className="profile__cell-content">Оксана</td>
//                     </tr>
//                     <tr className="profile__line">
//                         <td className="profile__cell-name">E-mail</td>
//                         <td className="profile__cell-content">pochta@yandex.ru</td>
//                     </tr>
//                 </table>
//                 <Link to={"#"} className="profile__edit" type="submit" >Редактировать</Link>
//                 <Link to={"/"} className="profile__logout" type="button" >Выйти из аккаунта</Link>
//             </section>
//         </main>
//     )
// }

// export default Profile