import { Link, useLocation } from "react-router-dom";
import { main, auth } from "./helpers/constants.ts";
import type { LinkProps } from "./helpers/interfaces.ts";
import Logo from "./elements/Logo.tsx";
import {
    Youtube,
    Twitter,
    Facebook,
    Instagram,
    PinV2,
    Email,
    Phone,
} from "./elements/vectors.tsx";
import "../styles/Footer.scss";

interface FooterLinkProps extends LinkProps {
    icon: React.ReactElement;
    label?: string;
    target?: string;
}

const footerSocialProps: FooterLinkProps[] = [
    {
        url: "https://www.youtube.com/",
        icon: <Youtube />,
    },
    {
        url: "https://x.com/",
        icon: <Twitter />,
    },
    {
        url: "https://www.facebook.com/",
        icon: <Facebook />,
    },
    {
        url: "https://www.instagram.com/",
        icon: <Instagram />,
    },
];

const footerNavProps: FooterLinkProps[] = [
    {
        icon: <PinV2 />,
        label: "Address: ",
        url: "https://www.google.com/maps/",
        target: "_blank",
        linkName: "Lorem",
    },
    {
        icon: <Email />,
        label: "Email: ",
        url: "mailto:xyz@mail.com",
        linkName: "xyz@mail.com",
    },
    {
        icon: <Phone />,
        label: "Phone: ",
        url: "tel:00022200222",
        linkName: "00022200222",
    },
];

const Footer = () => {
    const { hash } = useLocation();
    const { home } = main;

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
                        {footerSocialProps.map(({ url, icon }) => {
                            return (
                                <a
                                    key={url}
                                    className="footer__social__link"
                                    href={url}
                                    target="_blank"
                                >
                                    {icon}
                                </a>
                            );
                        })}
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
                            <Link className="footer__link" to={main.home}>
                                Home
                            </Link>
                            <Link className="footer__link" to={main.about}>
                                About
                            </Link>
                            <Link className="footer__link" to={main.tours}>
                                Tours
                            </Link>
                        </div>
                    </div>
                    <div className="footer__nav__links">
                        <h3 className="footer__nav__title">Quick Links</h3>
                        <div className="footer__links">
                            <Link
                                className="footer__link"
                                to={`${home}#gallery`}
                                onClick={
                                    hash === "#gallery"
                                        ? () => {
                                              document
                                                  .getElementById("gallery")
                                                  ?.scrollIntoView({
                                                      behavior: "smooth",
                                                  });
                                          }
                                        : undefined
                                }
                            >
                                Gallery
                            </Link>
                            <Link className="footer__link" to={auth.login}>
                                Login
                            </Link>
                            <Link className="footer__link" to={auth.register}>
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="footer__nav__links">
                        <h3 className="footer__nav__title">Contact</h3>
                        <div className="footer__links">
                            {footerNavProps.map((props) => {
                                const { icon, label, url, target, linkName } =
                                    props;

                                return (
                                    <div
                                        key={url}
                                        className="footer__links__wrap"
                                    >
                                        <span className="footer__icon">
                                            {icon}
                                        </span>
                                        <span className="footer__label">
                                            {label}
                                        </span>
                                        <a
                                            className="footer__link"
                                            href={url}
                                            target={target}
                                        >
                                            {linkName}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
