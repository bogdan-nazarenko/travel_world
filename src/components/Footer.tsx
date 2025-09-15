import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Logo } from "./elements/Logo.tsx";
import {
    Youtube,
    Twitter,
    Facebook,
    Instagram,
    PinV2,
    Email,
    Phone,
} from "./elements/icons.tsx";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container footer_menu">
                <div className="footer__socials">
                    <Logo />

                    <p className="footer__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, enim.
                    </p>
                    <div className="footer__social__links">
                        <a
                            className="social__link"
                            href="https://www.youtube.com/"
                            target="_blank"
                        >
                            <Youtube />
                        </a>
                        <a
                            className="social__link"
                            href="https://x.com/"
                            target="_blank"
                        >
                            <Twitter />
                        </a>
                        <a
                            className="social__link"
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <Facebook />
                        </a>
                        <a
                            className="social__link"
                            href="https://www.instagram.com/"
                            target="_blank"
                        >
                            <Instagram />
                        </a>
                    </div>
                    <div className="footer__description">
                        © 2024{" "}
                        <span className="footer__highlight">
                            Vipin_uidesigns
                        </span>
                        . All Rights Reserved
                    </div>
                </div>
                <nav className="footer__navs">
                    <div className="footer__nav__links">
                        <h3 className="footer__nav__title">Discover</h3>
                        <div className="footer__links">
                            <Link className="footer__link" to="/">
                                Home
                            </Link>
                            <Link className="footer__link" to="/about">
                                About
                            </Link>
                            <Link className="footer__link" to="/tours">
                                Tours
                            </Link>
                        </div>
                    </div>
                    <div className="footer__nav__links">
                        <h3 className="footer__nav__title">Quick Links</h3>
                        <div className="footer__links">
                            <HashLink
                                className="footer__link"
                                to="/#gallery_section"
                            >
                                Gallery
                            </HashLink>
                            <Link className="footer__link" to="/login">
                                Login
                            </Link>
                            <Link className="footer__link" to="/register">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="footer__nav__links">
                        <h3 className="footer__nav__title">Contact</h3>
                        <div className="footer__links">
                            <div className="footer__links__wrap">
                                <span className="footer__icon">
                                    <PinV2 />
                                </span>
                                <span className="footer__label">Address: </span>
                                <a
                                    className="footer__link"
                                    href="https://www.google.com/maps/"
                                    target="_blank"
                                >
                                    Lorem
                                </a>
                            </div>
                            <div className="footer__links__wrap">
                                <span className="footer__icon">
                                    <Email />
                                </span>
                                <span className="footer__label">Email: </span>
                                <a
                                    className="footer__link"
                                    href="mailto:xyz@mail.com"
                                >
                                    xyz@mail.com
                                </a>
                            </div>
                            <div className="footer__links__wrap">
                                <span className="footer__icon">
                                    <Phone />
                                </span>
                                <span className="footer__label">Phone: </span>
                                <a
                                    className="footer__link"
                                    href="tel:00022200222"
                                >
                                    00022200222
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
