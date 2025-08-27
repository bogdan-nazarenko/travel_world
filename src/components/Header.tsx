import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { CustomLocation } from "./helpers/types.tsx";
import type { ClickProps } from "./helpers/interfaces.tsx";
import { Logo } from "./elements/Logo.tsx";
import "../styles/Header.scss";

const HeaderNavLinks = ({ clickFunc }: ClickProps) => {
    const location: CustomLocation = useLocation();

    return (
        <div className="header__nav__links">
            <Link
                className={
                    "header__link" +
                    (location.pathname === "/" ? " color--light" : "")
                }
                to="/"
                onClick={clickFunc}
            >
                Home
            </Link>
            <Link
                className={
                    "header__link" +
                    (location.pathname === "/about" ? " color--light" : "")
                }
                to="/about"
                onClick={clickFunc}
            >
                About
            </Link>
            <Link
                className={
                    "header__link" +
                    (location.pathname === "/tours" ? " color--light" : "")
                }
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
        if (isMenuOpen !== " menu--open") {
            setMenuOpen(" menu--open");
            setNavsOpen(" navs--open");
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

    useEffect(() => {
        mobileMenu();
        window.addEventListener("resize", mobileMenu);
    }, []);

    const location: CustomLocation = useLocation();

    let secondaryColor: string = "";

    if (location.pathname !== "/login" && location.pathname !== "/register") {
        secondaryColor = " main--color";
    }

    return (
        <header>
            <div className="container header_menu">
                <Logo clickFunc={closeMenu} />

                <nav className={"header__navs" + isNavsOpen}>
                    {((location.pathname !== "/login" &&
                        location.pathname !== "/register") ||
                        isMobile) && <HeaderNavLinks clickFunc={closeMenu} />}

                    <div className="header__authorization">
                        <Link
                            className={
                                "header__authorization__link" +
                                (location.pathname === "/login"
                                    ? " bg-color--light"
                                    : "")
                            }
                            to="/login"
                            onClick={closeMenu}
                        >
                            Login
                        </Link>
                        <Link
                            className={
                                "header__authorization__link" +
                                (location.pathname === "/register"
                                    ? " bg-color--light"
                                    : secondaryColor)
                            }
                            to="/register"
                            onClick={closeMenu}
                        >
                            Register
                        </Link>
                    </div>
                </nav>

                {isMobile && (
                    <div
                        className={"header__menu__button" + isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="menu__icon"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 6L20 6"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 12L20 12"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 18L20 18"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
