import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMobile } from "./helpers/responsive.ts";
import { main, auth, active, open } from "./helpers/constants.ts";
import type { ClickProps, LinkProps } from "./helpers/interfaces.ts";
import Logo from "./elements/Logo.tsx";
import "../styles/Header.scss";

const headerLink: string = "header__link";
const headerNavProps: LinkProps[] = [
    { linkClass: headerLink, url: main.home, linkName: "Home" },
    { linkClass: headerLink, url: main.about, linkName: "About" },
    { linkClass: headerLink, url: main.tours, linkName: "Tours" },
];

const HeaderNavLinks = ({ clickFunc }: ClickProps) => {
    const { pathname } = useLocation();

    return (
        <div className="header__nav__links">
            {headerNavProps.map(({ linkClass, url, linkName }) => {
                const isActive: string = pathname === url ? active : "";

                return (
                    <Link
                        key={url}
                        className={`${linkClass} ${isActive}`.trim()}
                        to={url}
                        onClick={clickFunc}
                    >
                        {linkName}
                    </Link>
                );
            })}
        </div>
    );
};

const headerAuthorizationLink: string = "header__authorization__link";
const authorizationProps: LinkProps[] = [
    {
        linkClass: headerAuthorizationLink,
        url: auth.login,
        linkName: "Login",
    },
    {
        linkClass: headerAuthorizationLink,
        url: auth.register,
        linkName: "Register",
    },
];

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function closeMenu(): void {
        if (isMenuOpen === true) {
            setMenuOpen(false);
        }
    }

    const { pathname } = useLocation();
    const isPathFromMain: boolean = Object.values(main).includes(pathname);
    const isMobile = useMobile();

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.removeAttribute("style");
            setMenuOpen(false);
        }
    }, [isMenuOpen, isMobile]);

    function toggleMenu(): void {
        if (isMenuOpen === false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }

    return (
        <header>
            <div className="container header_menu">
                <Logo clickFunc={closeMenu} />

                <nav
                    className={`header__navs ${isMenuOpen ? open : ""}`.trim()}
                >
                    {(isPathFromMain || isMobile) && (
                        <HeaderNavLinks clickFunc={closeMenu} />
                    )}

                    <div className="header__authorization">
                        {authorizationProps.map((props) => {
                            const { linkClass, url, linkName } = props;
                            const isActive: string =
                                pathname === url ? active : "";

                            return (
                                <Link
                                    key={url}
                                    className={`${linkClass} ${isActive}`.trim()}
                                    to={url}
                                    onClick={closeMenu}
                                >
                                    {linkName}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {isMobile && (
                    <button
                        className={`header__menu__button ${isMenuOpen ? open : ""}`.trim()}
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
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
