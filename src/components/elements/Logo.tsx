import { Link } from "react-router-dom";
import type { ClickProps } from "../helpers/interfaces.ts";
import logo from "../../assets/media/images/logo.png";
import "../../styles/elements/Logo.scss";

const Logo = ({ clickFunc }: ClickProps) => {
    return (
        <Link className="logo" to="/" onClick={clickFunc}>
            <img className="logo__pic" src={logo} alt="Travel World" />
        </Link>
    );
};

export default Logo;
