import { useState, useEffect } from "react";
import { SearchBar } from "../elements/SearchBar.tsx";
import { Plane } from "../elements/vectors.tsx";
import "../../styles/blocks/ToursSearch.scss";

export const ToursSearch = () => {
    const [isDesktop, setDesktop] = useState(true);

    function showPlane(): void {
        if (window.innerWidth < 1024) {
            setDesktop(false);
        } else {
            setDesktop(true);
        }
    }

    useEffect(() => {
        showPlane();
        window.addEventListener("resize", showPlane);

        return () => window.removeEventListener("resize", showPlane);
    }, []);

    return (
        <section className="tours_search_section">
            <div className="container tours_search">
                <SearchBar />
                {isDesktop && <Plane />}
            </div>
        </section>
    );
};
