import { useLocation, Link } from "react-router-dom";
import type { CustomLocation } from "./types.tsx";
import { Logo } from "./elements/Logo.tsx";
import "../styles/Header.scss";

const HeaderNavList = () => {
    const location: CustomLocation = useLocation();

    let colorHome: string = "";
    let colorAbout: string = "";
    let colorTours: string = "";

    if (location.pathname === "/") {
        colorHome = "color--light";
    }
    if (location.pathname === "/about") {
        colorAbout = "color--light";
    }
    if (location.pathname === "/tours") {
        colorTours = "color--light";
    }

    return (
        <div className="header__nav__links">
            <Link className={`header__link ${colorHome}`} to="/">
                Home
            </Link>
            <Link className={`header__link ${colorAbout}`} to="/about">
                About
            </Link>
            <Link className={`header__link ${colorTours}`} to="/tours">
                Tours
            </Link>
        </div>
    );
};

const Header = () => {
    const location: CustomLocation = useLocation();

    let bgColorLogin: string = "";
    let bgColorRegister: string = "";
    let secondaryColor: string = "";

    if (location.pathname === "/login") {
        bgColorLogin = "bg-color--light";
    }
    if (location.pathname === "/register") {
        bgColorRegister = "bg-color--light";
    }
    if (location.pathname !== "/login" && location.pathname !== "/register") {
        secondaryColor = "main--color";
    }

    return (
        <header>
            <div className="container header_menu">
                <Logo />

                <nav className="header__navs">
                    {location.pathname !== "login" &&
                        location.pathname !== "register" && <HeaderNavList />}

                    <div className="header__authorization">
                        <Link
                            className={`header__authorization__link ${bgColorLogin}`}
                            to="/login"
                        >
                            Login
                        </Link>
                        <Link
                            className={`header__authorization__link ${bgColorRegister} ${secondaryColor}`}
                            to="/register"
                        >
                            Register
                        </Link>
                    </div>
                </nav>

                {location.pathname !== "/login" &&
                    location.pathname !== "/register" && (
                        <div className="header__menu__button"></div>
                    )}
            </div>
        </header>
    );
};

export default Header;
