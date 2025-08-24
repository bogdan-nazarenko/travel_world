import { Link } from "react-router-dom";
import { Logo } from "./elements/Logo.tsx";
import {
    Youtube,
    Twitter,
    Facebook,
    Instagram,
    Pin,
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
                        <Link
                            className="social__link"
                            to="https://www.youtube.com/"
                            target="_blank"
                        >
                            <Youtube />
                        </Link>
                        <Link
                            className="social__link"
                            to="https://x.com/"
                            target="_blank"
                        >
                            <Twitter />
                        </Link>
                        <Link
                            className="social__link"
                            to="https://www.facebook.com/"
                            target="_blank"
                        >
                            <Facebook />
                        </Link>
                        <Link
                            className="social__link"
                            to="https://www.instagram.com/"
                            target="_blank"
                        >
                            <Instagram />
                        </Link>
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
                            <Link className="footer__link" to="/#gallery">
                                Gallery
                            </Link>
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
                                    <Pin />
                                </span>
                                <span className="footer__label">Address: </span>
                                <Link
                                    className="footer__link"
                                    to="https://www.google.com/maps/"
                                    target="_blank"
                                >
                                    Lorem
                                </Link>
                            </div>
                            <div className="footer__links__wrap">
                                <span className="footer__icon">
                                    <Email />
                                </span>
                                <span className="footer__label">Email: </span>
                                <Link
                                    className="footer__link"
                                    to="mailto:xyz@mail.com"
                                >
                                    xyz@mail.com
                                </Link>
                            </div>
                            <div className="footer__links__wrap">
                                <span className="footer__icon">
                                    <Phone />
                                </span>
                                <span className="footer__label">Phone: </span>
                                <Link
                                    className="footer__link"
                                    to="tel:00022200222"
                                >
                                    00022200222
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
