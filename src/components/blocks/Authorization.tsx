import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useMobile } from "../helpers/responsive.ts";
import { pages } from "../helpers/constants.ts";
import type { ClickProps } from "../helpers/interfaces.ts";
import { Plane, TajMahal, SightsOfEurope } from "../elements/vectors.tsx";
import accountsImage from "../../assets/media/images/accounts_img.webp";
import hideIcon from "../../assets/media/images/icons/hide.svg";
import showIcon from "../../assets/media/images/icons/show.svg";
import "../../styles/blocks/Authorization.scss";

interface FormAreaProps extends ClickProps {
    label: string;
    id: string;
    type: string;
    name: string;
    autoComplete?: string;
    placeholder: string;
    required?: boolean;
    icon?: string;
}

const AuthorizationArea = (props: FormAreaProps) => {
    return (
        <div className="authorization__area">
            <label className="authorization__area__label" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className="authorization__input"
                id={props.id}
                type={props.type}
                name={props.name}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                required={props.required}
            />
            {props.id === "password" && (
                <img
                    className="eye__icon"
                    src={props.icon}
                    alt=""
                    onClick={props.clickFunc}
                />
            )}
        </div>
    );
};

const AuthorizationSocials = () => {
    return (
        <div className="authorization__socials">
            <a
                className="authorization__social__link"
                href="https://www.google.com/"
            ></a>
            <a
                className="authorization__social__link"
                href="https://www.facebook.com/"
            ></a>
            <a
                className="authorization__social__link"
                href="https://www.apple.com/"
            ></a>
        </div>
    );
};

interface WrapProps {
    wrapName: string;
    buttonName: string;
    description: string;
    descriptionLink: string;
    descriptionLinkName: string;
}

const FormWrap = (props: WrapProps) => {
    return (
        <div className={props.wrapName}>
            <button className="authorization__button" type="submit">
                {props.buttonName}
            </button>
            <div className="authorization__line">
                <span></span>
                or
                <span></span>
            </div>

            <AuthorizationSocials />

            <div className="authorization__description">
                {props.description}{" "}
                <Link to={props.descriptionLink}>
                    {props.descriptionLinkName}
                </Link>
            </div>
        </div>
    );
};

interface PasswordProps extends ClickProps {
    isValueVisible: boolean;
}

const Login = ({ isValueVisible, clickFunc }: PasswordProps) => {
    const loginValues: FormAreaProps[] = [
        {
            label: "Email",
            id: "email",
            type: "email",
            name: "email",
            autoComplete: "email",
            placeholder: "Enter Email or Username",
            required: true,
        },
        {
            label: "Password",
            id: "password",
            type: isValueVisible ? "password" : "text",
            name: "password",
            placeholder: "Enter Password",
            required: true,
            icon: isValueVisible ? showIcon : hideIcon,
        },
    ];

    return (
        <form className="authorization__form login__form" action="#">
            <h1 className="authorization__title">Welcome</h1>
            <div className="authorization__subtitle">Login with Email</div>

            <div className="login__areas">
                {loginValues.map((props) => {
                    const {
                        label,
                        id,
                        type,
                        name,
                        autoComplete,
                        placeholder,
                        required,
                        icon,
                    } = props;

                    return (
                        <AuthorizationArea
                            key={id}
                            label={label}
                            id={id}
                            type={type}
                            name={name}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                            required={required}
                            icon={icon}
                            clickFunc={clickFunc}
                        />
                    );
                })}
            </div>

            <a className="login__help__link" href="#">
                Forgot your password?
            </a>

            <FormWrap
                wrapName="login__wrap"
                buttonName="Login"
                description="Don’t have account?"
                descriptionLink={pages.register}
                descriptionLinkName="Register Now"
            />
        </form>
    );
};

const Register = ({ isValueVisible, clickFunc }: PasswordProps) => {
    const registerValues: FormAreaProps[] = [
        {
            label: "First Name",
            id: "first_name",
            type: "text",
            name: "first_name",
            autoComplete: "given-name",
            placeholder: "First Name",
            required: true,
        },
        {
            label: "Last Name",
            id: "last_name",
            type: "text",
            name: "last_name",
            placeholder: "Last Name",
            required: true,
        },
        {
            label: "Email",
            id: "email",
            type: "email",
            name: "email",
            autoComplete: "email",
            placeholder: "Enter Email",
            required: true,
        },
        {
            label: "Password",
            id: "password",
            type: isValueVisible ? "password" : "text",
            name: "password",
            placeholder: "Enter Password",
            required: true,
            icon: isValueVisible ? showIcon : hideIcon,
        },
        {
            label: "Mobile Number",
            id: "tel",
            type: "tel",
            name: "tel",
            autoComplete: "tel",
            placeholder: "Mobile Number",
            required: true,
        },
    ];

    return (
        <form className="authorization__form register__form" action="#">
            <h1 className="authorization__title">Create an account</h1>
            <div className="authorization__subtitle">
                By creating an account, you agree to our{" "}
                <a href="#">Privacy policy</a> and <a href="#">Terms of use.</a>
            </div>

            <div className="register__areas">
                {registerValues.map((props) => {
                    const {
                        label,
                        id,
                        type,
                        name,
                        autoComplete,
                        placeholder,
                        required,
                        icon,
                    } = props;

                    return (
                        <AuthorizationArea
                            key={id}
                            label={label}
                            id={id}
                            type={type}
                            name={name}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                            required={required}
                            icon={icon}
                            clickFunc={clickFunc}
                        />
                    );
                })}
            </div>

            <FormWrap
                wrapName="register__wrap"
                buttonName="Create account"
                description="Already have an account?"
                descriptionLink={pages.login}
                descriptionLinkName="Login"
            />
        </form>
    );
};

const Authorization = () => {
    const isMobile = useMobile();
    const location = useLocation();
    const [password, setPassword] = useState(false);

    function togglePasswordVisibility(): void {
        if (password === false) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    }

    return (
        <section>
            <div className="container authorization">
                {!isMobile && (
                    <div className="authorization__image">
                        <img
                            className="authorization__pic"
                            src={accountsImage}
                            alt=""
                        />
                    </div>
                )}

                <div className="authorization__wrap">
                    {location.pathname === pages.login && (
                        <Login
                            isValueVisible={password}
                            clickFunc={togglePasswordVisibility}
                        />
                    )}
                    {location.pathname === pages.register && (
                        <Register
                            isValueVisible={password}
                            clickFunc={togglePasswordVisibility}
                        />
                    )}

                    <Plane />
                    <TajMahal />
                    <SightsOfEurope />
                </div>
            </div>
        </section>
    );
};

export default Authorization;
