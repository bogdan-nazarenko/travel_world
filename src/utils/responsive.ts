import { useState, useEffect } from "react";

export default function useMediaQuery(bp: string): boolean {
    const initial = (): boolean => window.matchMedia(`(${bp})`).matches;
    const [matches, setMatches] = useState<boolean>(initial);

    useEffect(() => {
        const mql = window.matchMedia(`(${bp})`) as MediaQueryList;
        const handler = () => setMatches(mql.matches);

        mql.addEventListener("change", handler);

        return () => mql.removeEventListener("change", handler);
    }, [bp]);

    return matches;
}
