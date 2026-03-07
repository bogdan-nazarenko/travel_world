import { useState, useEffect } from "react";

export function useDesktop(): boolean {
    const [desktop, setDesktop] = useState<boolean>(false);

    useEffect(() => {
        const result = (): void => setDesktop(window.innerWidth >= 1024);

        result();
        window.addEventListener("resize", result);

        return () => window.removeEventListener("resize", result);
    }, []);

    return desktop;
}

export function useMobile(): boolean {
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        const result = (): void => setMobile(window.innerWidth < 768);

        result();
        window.addEventListener("resize", result);

        return () => window.removeEventListener("resize", result);
    }, []);

    return mobile;
}
