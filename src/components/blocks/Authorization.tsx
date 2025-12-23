import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useMobile } from "../helpers/responsive.ts";
import { auth } from "../helpers/constants.ts";
import type { ClickProps, LinkProps } from "../helpers/interfaces.ts";
import { Plane, TajMahal, SightsOfEurope } from "../elements/vectors.tsx";
import accountsImage from "../../assets/media/images/accounts_img.webp";
import hideIcon from "../../assets/media/images/icons/hide.svg";
import showIcon from "../../assets/media/images/icons/show.svg";
import "../../styles/blocks/Authorization.scss";

interface PasswordProps extends ClickProps {
    valueVisibility?: string;
    icon?: string;
}

interface FormAreaProps extends PasswordProps {
    label: string;
    id: string;
    type?: string;
    name: string;
    autoComplete?: string;
    placeholder: string;
    required?: boolean;
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

const authSocialLinks: string[] = [
    "https://www.google.com/",
    "https://www.facebook.com/",
    "https://www.apple.com/",
];

const AuthorizationSocials = () => {
    return (
        <div className="authorization__socials">
            {authSocialLinks.map((url) => {
                return (
                    <a
                        key={url}
                        className="authorization__social__link"
                        href={url}
                        target="_blank"
                    ></a>
                );
            })}
        </div>
    );
};

interface WrapProps extends LinkProps {
    wrapClass: string;
    buttonName: string;
    description: string;
}

const FormWrap = (props: WrapProps) => {
    return (
        <div className={props.wrapClass}>
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
                {props.description} <Link to={props.url}>{props.linkName}</Link>
            </div>
        </div>
    );
};

const loginProps: FormAreaProps[] = [
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
        name: "password",
        placeholder: "Enter Password",
        required: true,
    },
];

const Login = ({ valueVisibility, icon, clickFunc }: PasswordProps) => {
    return (
        <form className="authorization__form login__form" action="#">
            <h1 className="authorization__title">Welcome</h1>
            <div className="authorization__subtitle">Login with Email</div>

            <div className="login__areas">
                {loginProps.map((props) => {
                    const {
                        label,
                        id,
                        type,
                        name,
                        autoComplete,
                        placeholder,
                        required,
                    } = props;

                    return (
                        <AuthorizationArea
                            key={id}
                            label={label}
                            id={id}
                            type={type || valueVisibility}
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
                wrapClass="login__wrap"
                buttonName="Login"
                description="Don’t have account?"
                url={auth.register}
                linkName="Register Now"
            />
        </form>
    );
};

const registerProps: FormAreaProps[] = [
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
        name: "password",
        placeholder: "Enter Password",
        required: true,
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

const Register = ({ valueVisibility, icon, clickFunc }: PasswordProps) => {
    return (
        <form className="authorization__form register__form" action="#">
            <h1 className="authorization__title">Create an account</h1>
            <div className="authorization__subtitle">
                By creating an account, you agree to our{" "}
                <a href="#">Privacy policy</a> and <a href="#">Terms of use.</a>
            </div>

            <div className="register__areas">
                {registerProps.map((props) => {
                    const {
                        label,
                        id,
                        type,
                        name,
                        autoComplete,
                        placeholder,
                        required,
                    } = props;

                    return (
                        <AuthorizationArea
                            key={id}
                            label={label}
                            id={id}
                            type={type || valueVisibility}
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
                wrapClass="register__wrap"
                buttonName="Create account"
                description="Already have an account?"
                url={auth.login}
                linkName="Login"
            />
        </form>
    );
};

const Authorization = () => {
    const isMobile = useMobile();
    const { pathname } = useLocation();
    const [password, setPassword] = useState(false);

    function togglePasswordVisibility(): void {
        setPassword(!password);
    }

    const passwordValueType: string = password ? "text" : "password";
    const toggleIcon: string = password ? showIcon : hideIcon;

    return (
        <section>
            <div className="container authorization_block">
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
                    {pathname === auth.login && (
                        <Login
                            valueVisibility={passwordValueType}
                            icon={toggleIcon}
                            clickFunc={togglePasswordVisibility}
                        />
                    )}
                    {pathname === auth.register && (
                        <Register
                            valueVisibility={passwordValueType}
                            icon={toggleIcon}
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
