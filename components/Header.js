import Logo from "./Logo"
import BurgerIcon from "./BurgerIcon"
const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="img__container">
                <img src="/assets/img/anime.jpg" alt="girl" className="img"/>
            </div>
            <div className="nav--burger">
                <BurgerIcon />
            </div>
        </div>
    )
}

export default Header;