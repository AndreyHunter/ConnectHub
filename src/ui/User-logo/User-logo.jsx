import './User-logo.scss'

const UserLogo = ({image}) => {
    return (
        <div className="user-logo">
            <a href="#!" className="user-logo__link">
                <img src={image} alt="user-logo" className='user-logo__image'/>
            </a>
        </div>
    )
}

export default UserLogo