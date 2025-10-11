import { useDesktop } from "../helpers/responsive.ts";
import SearchBar from "../elements/SearchBar.tsx";
import { Plane } from "../elements/vectors.tsx";
import "../../styles/blocks/ToursSearch.scss";

const ToursSearch = () => {
    const isDesktop = useDesktop();

    return (
        <section className="tours_search_section">
            <div className="container tours_search">
                <SearchBar />
                {isDesktop && <Plane />}
            </div>
        </section>
    );
};

export default ToursSearch;
