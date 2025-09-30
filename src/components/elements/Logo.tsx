import { Link } from "react-router-dom";
import logo from "../../assets/media/images/logo.png";
import "../../styles/elements/Logo.scss";

const Logo = ({ clickFunc }: { clickFunc?: () => void }) => {
    return (
        <Link className="logo" to="/" onClick={clickFunc}>
            <img className="logo__pic" src={logo} alt="Travel World" />
        </Link>
    );
};

export default Logo;
