import { useLocation } from "react-router-dom";
import type { CustomLocation } from "../types.tsx";

const Error = () => {
    return <h2 style={{ color: "red" }}>Error 404</h2>;
};

const ErrorPage = () => {
    const location: CustomLocation = useLocation();

    return (
        <>
            {location.pathname !== "/" &&
                location.pathname !== "/about" &&
                location.pathname !== "/tours" &&
                location.pathname !== "/login" &&
                location.pathname !== "/register" && <Error />}
        </>
    );
};

export default ErrorPage;
