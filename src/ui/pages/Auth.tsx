import { useState } from "react";
import { useLocation, Link } from "react-router";
import useMediaQuery from "@utils/responsive";
import { Plane, TajMahal, WorldSights } from "@ui/components/vectors";
import image from "@media/images/female-tourist.webp";
import "./Auth.scss";

interface AuthField {
    label: string;
    id: string;
    type: string;
    autoComplete?: string;
    placeholder: string;
}

const loginFields: AuthField[] = [
    {
        label: "Email",
        id: "email",
        type: "email",
        autoComplete: "email",
        placeholder: "Enter Email or Username",
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        placeholder: "Enter Password",
    },
];

const registerFields: AuthField[] = [
    {
        label: "First Name",
        id: "first-name",
        type: "text",
        autoComplete: "given-name",
        placeholder: "First Name",
    },
    {
        label: "Last Name",
        id: "last-name",
        type: "text",
        placeholder: "Last Name",
    },
    {
        label: "Email",
        id: "email",
        type: "email",
        autoComplete: "email",
        placeholder: "Enter Email",
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        placeholder: "Enter Password",
    },
    {
        label: "Mobile Number",
        id: "mobile-number",
        type: "tel",
        placeholder: "Mobile Number",
    },
];

const AuthLink = ({ name }: { name: string }) => (
    <a
        className="auth__link"
        href="#"
        onClick={(event) => event.preventDefault()}
    >
        {name}
    </a>
);

const Auth = () => {
    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const { pathname } = useLocation();
    const isDesktop = useMediaQuery("width >= 1024px");
    const isMobile = useMediaQuery("width < 768px");

    const isLogin = pathname === "/login";
    const fields = isLogin ? loginFields : registerFields;

    return (
        <section className="auth section">
            <div className="auth__container container">
                {!isMobile && (
                    <div className="auth__image-wrapper">
                        <img className="auth__image" src={image} alt="" />
                    </div>
                )}

                <div className="auth__content">
                    <div
                        className={`auth__content-inner ${isLogin && !isMobile ? "auth__content-inner_width_narrow" : ""}`.trim()}
                    >
                        <h1
                            className={`auth__title ${isLogin ? "large-title" : "primary-title"}`}
                        >
                            {isLogin ? "Welcome" : "Create an account"}
                        </h1>

                        <p className="auth__text">
                            {isLogin ? (
                                "Login with Email"
                            ) : (
                                <>
                                    By creating an account, you agree to our{" "}
                                    <AuthLink name="Privacy policy" /> and{" "}
                                    <AuthLink name="Terms of use" />.
                                </>
                            )}
                        </p>

                        <form className="auth__form">
                            <fieldset
                                className={`auth__field-set ${(isLogin && !isMobile && "auth__field-set_type_login") || (isDesktop && "auth__field-set_type_register") || ""}`.trim()}
                            >
                                {fields.map((field) => {
                                    const {
                                        label,
                                        id,
                                        type,
                                        autoComplete,
                                        placeholder,
                                    } = field;

                                    return (
                                        <div
                                            className="auth__field-wrapper"
                                            key={id}
                                        >
                                            <label
                                                className="auth__label"
                                                htmlFor={id}
                                            >
                                                {label}
                                            </label>
                                            <input
                                                className="auth__field"
                                                id={id}
                                                type={
                                                    type === "password" &&
                                                    isPasswordVisible
                                                        ? "text"
                                                        : type
                                                }
                                                name={id}
                                                autoComplete={autoComplete}
                                                placeholder={placeholder}
                                                required
                                            />
                                            {type === "password" && (
                                                <button
                                                    className={`auth__password-button ${isPasswordVisible ? "auth__password-button_active" : ""}`.trim()}
                                                    type="button"
                                                    aria-label={
                                                        isPasswordVisible
                                                            ? "Hide password"
                                                            : "Show password"
                                                    }
                                                    onClick={() => {
                                                        setPasswordVisible(
                                                            !isPasswordVisible
                                                        );
                                                    }}
                                                ></button>
                                            )}
                                        </div>
                                    );
                                })}
                            </fieldset>

                            {isLogin && (
                                <AuthLink name="Forgot your password?" />
                            )}

                            <div className="auth__submit-area">
                                <button className="auth__submit-button button">
                                    {isLogin ? "Login" : "Create account"}
                                </button>

                                <div
                                    className={`auth__divider ${isLogin && isDesktop ? "auth__divider_view_custom" : ""}`.trim()}
                                    role="separator"
                                >
                                    <span>or</span>
                                </div>

                                <div className="auth__social-group">
                                    <a
                                        className="auth__social-link auth__social-link_google"
                                        href="https://www.google.com/"
                                        aria-label="Google"
                                    ></a>
                                    <a
                                        className="auth__social-link auth__social-link_facebook"
                                        href="https://www.facebook.com/"
                                        aria-label="Facebook"
                                    ></a>
                                    <a
                                        className="auth__social-link auth__social-link_apple"
                                        href="https://www.apple.com/"
                                        aria-label="Apple"
                                    ></a>
                                </div>

                                <p className="auth__text">
                                    {isLogin ? (
                                        <>
                                            Don’t have account?{" "}
                                            <Link
                                                className="auth__link"
                                                to="/register"
                                            >
                                                Register Now
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            Already have an account?{" "}
                                            <Link
                                                className="auth__link"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </>
                                    )}
                                </p>
                            </div>
                        </form>
                    </div>

                    <Plane />
                    <TajMahal />
                    <WorldSights />
                </div>
            </div>
        </section>
    );
};

export default Auth;
