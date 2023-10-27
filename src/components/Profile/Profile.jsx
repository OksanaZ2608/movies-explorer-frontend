function Profile() {
    return (
        <main className="main">
            <section className="profile">
                <p className="profile__greeting">Привет, Оксана!</p>
                <table className="profile__table">
                    <tr className="profile__line">
                        <td className="profile__cell-name">Имя</td>
                        <td className="profile__cell-content">Оксана</td>
                    </tr>
                    <tr className="profile__line">
                        <td className="profile__cell-name">E-mail</td>
                        <td className="profile__cell-content">pochta@yandex.ru</td>
                    </tr>
                </table>
                <button className="profile__edit" type="submit" >Редактировать</button>
                <button className="profile__logout" type="button">Выйти из аккаунта</button>
            </section>
        </main>
    )
}

export default Profile