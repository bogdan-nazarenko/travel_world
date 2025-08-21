import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import type { CustomLocation } from "./helpers/types.tsx";
import type { ClickProps } from "./helpers/interfaces.tsx";
import { Logo } from "./elements/Logo.tsx";
import "../styles/Header.scss";

const HeaderNavList = ({ clickFunc }: ClickProps) => {
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
            <Link
                className={`header__link ${colorHome}`}
                to="/"
                onClick={clickFunc}
            >
                Home
            </Link>
            <Link
                className={`header__link ${colorAbout}`}
                to="/about"
                onClick={clickFunc}
            >
                About
            </Link>
            <Link
                className={`header__link ${colorTours}`}
                to="/tours"
                onClick={clickFunc}
            >
                Tours
            </Link>
        </div>
    );
};

const Header = () => {
    const reset: string = "";

    const [isOpen, setIsOpen] = useState(reset);
    const [navsOpen, setNavsOpen] = useState(reset);

    function toggleMenu(): void {
        if (isOpen !== "menu--open") {
            setIsOpen("menu--open");
            setNavsOpen("navs--open");
        } else {
            setIsOpen(reset);
            setNavsOpen(reset);
        }
    }

    function closeMenu(): void {
        setIsOpen(reset);
        setNavsOpen(reset);
    }

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
                <Logo clickFunc={closeMenu} />

                <nav className={`header__navs ${navsOpen}`}>
                    {(location.pathname !== "/login" &&
                        location.pathname !== "/register" && (
                            <HeaderNavList clickFunc={closeMenu} />
                        )) ||
                        (window.innerWidth < 768 && (
                            <HeaderNavList clickFunc={closeMenu} />
                        ))}

                    <div className="header__authorization">
                        <Link
                            className={`header__authorization__link ${bgColorLogin}`}
                            to="/login"
                            onClick={closeMenu}
                        >
                            Login
                        </Link>
                        <Link
                            className={`header__authorization__link ${bgColorRegister} ${secondaryColor}`}
                            to="/register"
                            onClick={closeMenu}
                        >
                            Register
                        </Link>
                    </div>
                </nav>

                <div
                    className={`header__menu__button ${isOpen}`}
                    onClick={toggleMenu}
                ></div>
            </div>
        </header>
    );
};

export default Header;
