import UserLogo from '../../ui/User-logo/User-logo'
import './User.scss'

const userImage = 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'

const User = () => {
    return (
        <div className='user'>
            <UserLogo image={userImage}/>
            <div className="user-info">
                <a href='#!' className="user-info__title">
                    Dmitry K.
                </a>
                <ul className="user-info__list">
                    <li className="user-info__item">Date of Birth: 2 january</li>
                    <li className="user-info__item">City: Minsk</li>
                    <li className="user-info__item">Education: BSU'11</li>
                    <li className="user-info__item">Web Site: https://it-kamasutra.com</li>
                </ul>
            </div>
        </div>
    )   
}

export default User