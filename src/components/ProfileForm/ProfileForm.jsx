import { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function ProfileForm({children, setIsError, isError, onLogout, onSubmit, setIsSucces, isSuccess, isEdit, isValid }) {

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    useEffect(() => {
        setIsSucces(false)
    }, [setIsSucces])

    return (
        <main className="main">
            <section className="profile">
                <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
                <form className="profile__table" onSubmit={onSubmit}>
                    {children}
                {!isSuccess ? "" : <span className="profile__message">Данные успешно сохранены</span>}
                {!isError ? "" : <span className="profile__message_error">При обновлении профиля произошла ошибка</span>}
                {isEdit && !isSuccess ? <button className="profile__save-button" onClick={onSubmit} disabled={isError ? true : false} >Сохранить</button> : 
                <button className="profile__edit" type="submit" >Редактировать</button>&&<button className="profile__logout" type="button" onClick={onLogout}>Выйти из аккаунта</button>
    }
                </form>
            </section>
        </main>
    )
}

export default ProfileForm