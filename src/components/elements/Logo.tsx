import { Link } from "react-router-dom";
import logo from "../../assets/media/images/logo.png";
import "../../styles/elements/Logo.scss";

export const Logo = () => {
    return (
        <Link className="logo" to="/">
            <img className="logo__pic" src={logo} alt="Travel World" />
        </Link>
    );
};
