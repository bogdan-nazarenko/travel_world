import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router";
import useMediaQuery from "@utils/responsive";
import { setMenuOpen } from "@libs/redux";
import { useAppSelector, useAppDispatch } from "@data/store";
import { mainPaths } from "@data/paths";
import { mainLinks, authLinks } from "@data/links";
import HomeLink from "@ui/components/HomeLink";
import "./Header.scss";

const Header = () => {
    const { pathname } = useLocation();
    const isMobile = useMediaQuery("width < 768px");

    const isMenuOpen = useAppSelector((state) => {
        return state.app.headerState.isMenuOpen;
    });
    const dispatch = useAppDispatch();

    const closeMenu = () => dispatch(setMenuOpen(false));

    const isMobileRef = useRef<boolean>(isMobile);
    const isMenuOpenRef = useRef<boolean>(isMenuOpen);

    useEffect(() => {
        isMobileRef.current = isMobile;
        isMenuOpenRef.current = isMenuOpen;

        document.body.classList.toggle(
            "page-layout_non-scrollable",
            isMenuOpen
        );
    }, [isMobile, isMenuOpen]);

    useEffect(() => {
        function windowHandler(): void {
            if (isMobileRef.current && isMenuOpenRef.current) {
                dispatch(setMenuOpen(false));
            }
        }

        const mobileMql = window.matchMedia("(width < 768px)");

        function mqlHandler(): void {
            if (!mobileMql.matches) dispatch(setMenuOpen(false));
        }

        window.addEventListener("popstate", windowHandler);
        mobileMql.addEventListener("change", mqlHandler);

        return () => {
            window.removeEventListener("popstate", windowHandler);
            mobileMql.removeEventListener("change", mqlHandler);
        };
    }, [dispatch]);

    return (
        <header className="header">
            <div className="header__container container">
                <HomeLink
                    onClick={isMobile && isMenuOpen ? closeMenu : undefined}
                />

                {isMobile && (
                    <button
                        className="header__menu-button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-controls="page-menu"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={() => dispatch(setMenuOpen(!isMenuOpen))}
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

                <nav
                    className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`.trim()}
                    id="page-menu"
                    aria-label="Main menu"
                >
                    <div className="header__nav-inner">
                        {(mainPaths.includes(pathname) || isMobile) && (
                            <ul className={"header__list"}>
                                {mainLinks.map((link) => {
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
                                                    url === pathname
                                                        ? "page"
                                                        : undefined
                                                }
                                                onClick={
                                                    isMobile
                                                        ? closeMenu
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
                                                url === pathname
                                                    ? "page"
                                                    : undefined
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
            </div>
        </header>
    );
};

export default Header;
