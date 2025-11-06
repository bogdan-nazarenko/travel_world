import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useMobile } from "./helpers/responsive.ts";
import { pages, active, open } from "./helpers/constants.ts";
import type { ClickProps, LinkProps } from "./helpers/interfaces.ts";
import Logo from "./elements/Logo.tsx";
import "../styles/Header.scss";

const HeaderNavLinks = ({ clickFunc }: ClickProps) => {
    const location = useLocation();
    const headerLink: string = "header__link";

    const linkProps: LinkProps[] = [
        { linkClass: headerLink, url: pages.home, linkName: "Home" },
        { linkClass: headerLink, url: pages.about, linkName: "About" },
        { linkClass: headerLink, url: pages.tours, linkName: "Tours" },
    ];

    return (
        <div className="header__nav__links">
            {linkProps.map(({ linkClass, url, linkName }) => {
                const isActive: string =
                    location.pathname === url ? active : "";

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

const Header = () => {
    const headerContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const targetElement = document.body;
        const headerMenu = headerContainer.current;

        const config = {
            attributes: true,
        };

        function toggleMargin(): void {
            if (headerMenu) {
                if (
                    targetElement.offsetWidth < window.innerWidth &&
                    targetElement.classList.contains("hide-scrollbar")
                ) {
                    headerMenu.style.marginRight = "1.5rem";
                } else if (
                    targetElement.offsetWidth < window.innerWidth &&
                    !targetElement.classList.contains("hide-scrollbar") &&
                    headerMenu.hasAttribute("style")
                ) {
                    headerMenu.removeAttribute("style");
                } else {
                    if (
                        targetElement.offsetWidth === window.innerWidth &&
                        !targetElement.classList.contains("hide-scrollbar") &&
                        headerMenu.hasAttribute("style")
                    ) {
                        headerMenu.removeAttribute("style");
                    }
                }
            }
        }

        const watcher = new MutationObserver(toggleMargin);
        watcher.observe(targetElement, config);

        return () => watcher.disconnect();
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);

    function closeMenu(): void {
        if (isMenuOpen === true) {
            setMenuOpen(false);
        }
    }

    const location = useLocation();
    const isAuthorization: boolean =
        location.pathname !== pages.login &&
        location.pathname !== pages.register;
    const isMobile = useMobile();

    const headerAuthorizationLink: string = "header__authorization__link";

    const linkProps: LinkProps[] = [
        {
            linkClass: headerAuthorizationLink,
            url: pages.login,
            linkName: "Login",
        },
        {
            linkClass: headerAuthorizationLink,
            url: pages.register,
            linkName: "Register",
        },
    ];

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
            <div className="container header_menu" ref={headerContainer}>
                <Logo clickFunc={closeMenu} />

                <nav
                    className={`header__navs ${isMenuOpen ? open : ""}`.trim()}
                >
                    {(isAuthorization || isMobile) && (
                        <HeaderNavLinks clickFunc={closeMenu} />
                    )}

                    <div className="header__authorization">
                        {linkProps.map(({ linkClass, url, linkName }) => {
                            const isActive: string =
                                location.pathname === url ? active : "";

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
