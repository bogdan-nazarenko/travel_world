import { useState, useEffect, useRef, type TransitionEvent } from "react";
import { useLocation, Link } from "react-router";
import useMediaQuery from "@utils/responsive";
import { mainPaths } from "@data/paths";
import { mainLinks, authLinks } from "@data/links";
import HomeLink from "@ui/components/HomeLink";
import "./Header.scss";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const { pathname } = useLocation();
    const isDesktop = useMediaQuery("width >= 1024px");
    const isMobile = useMediaQuery("width < 768px");

    const closeMenu = () => setMenuOpen(false);

    const isMobileRef = useRef<boolean>(isMobile);
    const isMenuOpenRef = useRef<boolean>(isMenuOpen);

    useEffect(() => {
        function handler(): void {
            if (isMobileRef.current && isMenuOpenRef.current) closeMenu();
        }

        window.addEventListener("popstate", handler);

        return () => window.removeEventListener("popstate", handler);
    }, []);

    const mainRef = useRef<HTMLElement | null>(null);
    const footerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        isMobileRef.current = isMobile;
        isMenuOpenRef.current = isMenuOpen;

        if (!isMobile && isMenuOpen) queueMicrotask(closeMenu);

        document.body.classList.toggle(
            "page-layout_non-scrollable",
            isMenuOpen
        );

        if (!mainRef.current && !footerRef.current) {
            mainRef.current = document.querySelector(".main");
            footerRef.current = document.querySelector(".footer");
        }

        mainRef.current!.inert = isMenuOpen;
        footerRef.current!.inert = isMenuOpen;
    }, [isMobile, isMenuOpen]);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);
    const alreadyCalled = useRef<boolean>(false);

    useEffect(() => {
        if (!headerRef.current || alreadyCalled.current) return;

        if (!wrapperRef.current) {
            wrapperRef.current = headerRef.current.closest(".wrapper");
        }

        alreadyCalled.current = true;

        const htmlFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
        );

        wrapperRef.current!.style.setProperty(
            "--header-height",
            `${headerRef.current.scrollHeight / htmlFontSize}rem`
        );

        requestAnimationFrame(() => {
            alreadyCalled.current = false;
        });
    }, [isDesktop, isMobile]);

    const linkRef = useRef<HTMLAnchorElement | null>(null);

    function setMenuFocus(event: TransitionEvent): void {
        if (
            isMenuOpen &&
            event.propertyName === "visibility" &&
            event.target === event.currentTarget
        ) {
            linkRef.current?.focus();
        }
    }

    return (
        <header className="header" ref={headerRef}>
            <div className="header__container container">
                <HomeLink
                    onClick={isMobile && isMenuOpen ? closeMenu : undefined}
                />

                <nav
                    className={`header__nav ${isMobile && isMenuOpen ? "header__nav_open" : ""}`.trim()}
                    id="page-menu"
                    onTransitionEnd={isMobile ? setMenuFocus : undefined}
                >
                    <div className="header__nav-inner">
                        {(mainPaths.includes(pathname) || isMobile) && (
                            <ul className={"header__list"}>
                                {mainLinks.map((link, index) => {
                                    const { url, name } = link;

                                    return (
                                        <li
                                            className="header__list-item"
                                            key={url}
                                        >
                                            <Link
                                                className="header__link"
                                                to={url}
                                                aria-current={
                                                    url === pathname ||
                                                    undefined
                                                }
                                                onClick={
                                                    isMobile
                                                        ? closeMenu
                                                        : undefined
                                                }
                                                ref={
                                                    index === 0
                                                        ? linkRef
                                                        : undefined
                                                }
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <ul className="header__list header__list_auth">
                            {authLinks.map((link) => {
                                const { url, name } = link;

                                const modifier =
                                    url === "/register" &&
                                    url !== pathname &&
                                    pathname !== "/login"
                                        ? "header__auth-link_highlight"
                                        : "";

                                return (
                                    <li className="header__list-item" key={url}>
                                        <Link
                                            className={`header__auth-link ${modifier}`.trim()}
                                            to={url}
                                            aria-current={
                                                url === pathname || undefined
                                            }
                                            onClick={
                                                isMobile ? closeMenu : undefined
                                            }
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>

                {isMobile && (
                    <button
                        className="header__menu-button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-controls="page-menu"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="header__menu-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
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
