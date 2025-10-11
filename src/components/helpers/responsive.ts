import { useState, useEffect } from "react";

export function useDesktop(): boolean {
    const [desktop, setDesktop] = useState(false);

    useEffect(() => {
        const result = () =>
            window.innerWidth >= 1024 ? setDesktop(true) : setDesktop(false);

        result();
        window.addEventListener("resize", result);

        return () => window.removeEventListener("resize", result);
    }, []);

    return desktop;
}

export function useMobile(): boolean {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const result = () =>
            window.innerWidth < 768 ? setMobile(true) : setMobile(false);

        result();
        window.addEventListener("resize", result);

        return () => window.removeEventListener("resize", result);
    }, []);

    return mobile;
}
