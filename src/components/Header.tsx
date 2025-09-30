import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./elements/Logo.tsx";
import "../styles/Header.scss";

const HeaderNavLinks = ({ clickFunc }: { clickFunc?: () => void }) => {
    const location = useLocation();

    const homeLink: string = location.pathname === "/" ? "color--light" : "";

    const aboutLink: string =
        location.pathname === "/about" ? "color--light" : "";

    const toursLink: string =
        location.pathname === "/tours" ? "color--light" : "";

    return (
        <div className="header__nav__links">
            <Link
                className={`header__link ${homeLink}`.trim()}
                to="/"
                onClick={clickFunc}
            >
                Home
            </Link>
            <Link
                className={`header__link ${aboutLink}`.trim()}
                to="/about"
                onClick={clickFunc}
            >
                About
            </Link>
            <Link
                className={`header__link ${toursLink}`.trim()}
                to="/tours"
                onClick={clickFunc}
            >
                Tours
            </Link>
        </div>
    );
};

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState("");
    const [isNavsOpen, setNavsOpen] = useState("");

    function toggleMenu(): void {
        if (isMenuOpen !== "menu--open") {
            setMenuOpen("menu--open");
            setNavsOpen("navs--open");
        } else {
            setMenuOpen("");
            setNavsOpen("");
        }
    }

    function closeMenu(): void {
        if (isMenuOpen === "menu--open") {
            setMenuOpen("");
            setNavsOpen("");
        }
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

        return () => window.removeEventListener("resize", mobileMenu);
    }, []);

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.removeAttribute("style");
            setMenuOpen("");
            setNavsOpen("");
        }
    }, [isMenuOpen, isMobile]);

    const location = useLocation();

    const loginLink: string =
        location.pathname === "/login" ? "bg-color--light" : "";

    const registerLink: string =
        location.pathname === "/register" ? "bg-color--light" : "";

    const isMainPages: boolean =
        location.pathname !== "/login" && location.pathname !== "/register";

    const secondaryColor: string = isMainPages ? "main--color" : "";

    useEffect(() => {
        const targetElement = document.body;
        const headerMenu = document.querySelector(
            ".header_menu"
        ) as HTMLDivElement;

        const config = {
            attributes: true,
        };

        function toggleMargin(): void {
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

        const watcher = new MutationObserver(toggleMargin);
        watcher.observe(targetElement, config);

        return () => watcher.disconnect();
    }, []);

    return (
        <header>
            <div className="container header_menu">
                <Logo clickFunc={closeMenu} />

                <nav className={`header__navs ${isNavsOpen}`.trim()}>
                    {((location.pathname !== "/login" &&
                        location.pathname !== "/register") ||
                        isMobile) && <HeaderNavLinks clickFunc={closeMenu} />}

                    <div className="header__authorization">
                        <Link
                            className={`header__authorization__link ${loginLink}`.trim()}
                            to="/login"
                            onClick={closeMenu}
                        >
                            Login
                        </Link>
                        <Link
                            className={`header__authorization__link ${registerLink || secondaryColor}`.trim()}
                            to="/register"
                            onClick={closeMenu}
                        >
                            Register
                        </Link>
                    </div>
                </nav>

                {isMobile && (
                    <button
                        className={`header__menu__button ${isMenuOpen}`.trim()}
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
