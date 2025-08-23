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

    const [isMenuOpen, setMenuOpen] = useState(reset);
    const [isNavsOpen, setNavsOpen] = useState(reset);

    function toggleMenu(): void {
        if (isMenuOpen !== "menu--open") {
            setMenuOpen("menu--open");
            setNavsOpen("navs--open");
        } else {
            setMenuOpen(reset);
            setNavsOpen(reset);
        }
    }

    function closeMenu(): void {
        setMenuOpen(reset);
        setNavsOpen(reset);
    }

    const [isMobile, setMobile] = useState(false);

    function mobileMenu(): void {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    window.addEventListener("resize", mobileMenu);

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

                <nav className={`header__navs ${isNavsOpen}`}>
                    {(location.pathname !== "/login" &&
                        location.pathname !== "/register" && (
                            <HeaderNavList clickFunc={closeMenu} />
                        )) ||
                        ((isMobile || window.innerWidth < 768) && (
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

                {(isMobile || window.innerWidth < 768) && (
                    <div
                        className={`header__menu__button ${isMenuOpen}`}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="menu__icon"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 6L20 6"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M4 12L20 12"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M4 18L20 18"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
