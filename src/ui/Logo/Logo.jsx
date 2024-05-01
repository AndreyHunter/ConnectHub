import logo from './../../assets/images/logo.svg'
import './Logo.scss'

const Logo = () => {
    return (
        <div className="logo">
            <img 
                src={logo} 
                alt="logo"
                className="logo-image"
            />
            <a href="#!">
                ConnectHub
            </a>
        </div>
    )
}

export default Logo