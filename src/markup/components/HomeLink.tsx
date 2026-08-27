import { Link } from "react-router";
import logo from "@media/images/logo.png";
import "./HomeLink.scss";

interface HomeLink {
    className?: string;
    onClick?: () => void;
}

const HomeLink = ({ className = "", onClick }: HomeLink) => {
    return (
        <Link
            className={`${className} home-link`.trim()}
            to="/"
            onClick={onClick}
        >
            <img className="logo" src={logo} alt="TravelWorld" />
        </Link>
    );
};

export default HomeLink;
