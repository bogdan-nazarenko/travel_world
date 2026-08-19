import { Link } from "react-router";
import { mainLinks, authLinks, type NavLink } from "@data/links";
import { scrollToId } from "@utils/functions";
import HomeLink from "@markup/components/HomeLink";
import {
    Youtube,
    Twitter,
    Facebook,
    Instagram,
    PinV2,
    Email,
    Phone,
} from "@markup/components/vectors";
import "./Footer.scss";

interface SocialLink {
    url: string;
    name: string;
    icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
    { url: "https://www.youtube.com/", name: "Youtube", icon: <Youtube /> },
    { url: "https://x.com/", name: "X", icon: <Twitter /> },
    { url: "https://www.facebook.com/", name: "Facebook", icon: <Facebook /> },
    {
        url: "https://www.instagram.com/",
        name: "Instagram",
        icon: <Instagram />,
    },
];

const quickLinks: NavLink[] = [
    {
        targetId: "gallery",
        get url() {
            return `/#${this.targetId}`;
        },
        name: "Gallery",
    },
    ...authLinks,
];

interface ContactLink extends SocialLink {
    label: string;
}

const contactLinks: ContactLink[] = [
    {
        icon: <PinV2 />,
        label: "Address:",
        url: "https://www.google.com/maps",
        name: "Lorem",
    },
    {
        icon: <Email />,
        label: "Email:",
        url: "mailto:xyz@mail.com",
        name: "xyz@mail.com",
    },
    {
        icon: <Phone />,
        label: "Phone:",
        url: "tel:00022200222",
        name: "00022200222",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__socials">
                    <HomeLink />

                    <p className="footer__text text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, enim.
                    </p>
                    <div className="footer__social-group">
                        {socialLinks.map((link) => {
                            const { url, name, icon } = link;

                            return (
                                <a
                                    className="footer__social-link"
                                    href={url}
                                    aria-label={name}
                                    key={url}
                                >
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                    <p className="footer__description">
                        © 2024 <span>Vipin_uidesigns</span>. All Rights Reserved
                    </p>
                </div>

                <nav className="footer__nav">
                    <h2 className="footer__title">Discover</h2>
                    <ul className="footer__list">
                        {mainLinks.map((link) => {
                            const { url, name } = link;

                            return (
                                <li className="footer__list-item" key={url}>
                                    <Link className="footer__link" to={url}>
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <nav className="footer__nav">
                    <h2 className="footer__title">Quick Links</h2>
                    <ul className="footer__list">
                        {quickLinks.map((link) => {
                            const { targetId, url, name } = link;

                            return (
                                <li className="footer__list-item" key={url}>
                                    <Link
                                        className="footer__link"
                                        to={url}
                                        onClick={
                                            targetId
                                                ? () => scrollToId(targetId)
                                                : undefined
                                        }
                                    >
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <address className="footer__contacts">
                    <h2 className="footer__title">Contact</h2>
                    <ul className="footer__list">
                        {contactLinks.map((link) => {
                            const { icon, label, url, name } = link;

                            return (
                                <li
                                    className="footer__list-item footer__list-item_contact"
                                    key={url}
                                >
                                    {icon}
                                    <span>{label}</span>
                                    <a className="footer__link" href={url}>
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
