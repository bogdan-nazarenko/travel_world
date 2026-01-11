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
                return (
                    <Link
                        key={url}
                        className={`${linkClass} ${pathname === url ? active : ""}`.trim()}
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

const headerAuthLink: string = "header__authorization__link";
const headerAuthProps: LinkProps[] = [
    { linkClass: headerAuthLink, url: auth.login, linkName: "Login" },
    { linkClass: headerAuthLink, url: auth.register, linkName: "Register" },
];

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function closeMenu(): void {
        setMenuOpen(false);
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

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            window.addEventListener("popstate", closeMenu);

            return () => window.removeEventListener("popstate", closeMenu);
        }
    }, [isMenuOpen, isMobile]);

    return (
        <header>
            <div className="container header_menu">
                <Logo
                    clickFunc={isMenuOpen && isMobile ? closeMenu : undefined}
                />

                <nav className={`header__nav ${isMenuOpen ? open : ""}`.trim()}>
                    {(isPathFromMain || isMobile) && (
                        <HeaderNavLinks
                            clickFunc={isMobile ? closeMenu : undefined}
                        />
                    )}

                    <div className="header__authorization">
                        {headerAuthProps.map((props) => {
                            const { linkClass, url, linkName } = props;

                            return (
                                <Link
                                    key={url}
                                    className={`${linkClass} ${pathname === url ? active : ""}`.trim()}
                                    to={url}
                                    onClick={isMobile ? closeMenu : undefined}
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
                        onClick={() => setMenuOpen(!isMenuOpen)}
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
