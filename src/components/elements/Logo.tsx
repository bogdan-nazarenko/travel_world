import { Link } from "react-router-dom";
import type { ClickProps } from "../helpers/interfaces";
import logo from "../../assets/media/images/logo.png";
import "../../styles/elements/Logo.scss";

export const Logo = ({ clickFunc }: ClickProps) => {
    return (
        <Link className="logo" to="/" onClick={clickFunc}>
            <img className="logo__pic" src={logo} alt="Travel World" />
        </Link>
    );
};
