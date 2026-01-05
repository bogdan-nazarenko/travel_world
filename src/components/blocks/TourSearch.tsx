import { useDesktop } from "../helpers/responsive.ts";
import SearchBar from "../elements/SearchBar.tsx";
import { Plane } from "../elements/vectors.tsx";
import "../../styles/blocks/TourSearch.scss";

const TourSearch = () => {
    const isDesktop = useDesktop();

    return (
        <section className="tour_search">
            <div className="container tour_search_block">
                <SearchBar />
                {isDesktop && <Plane />}
            </div>
        </section>
    );
};

export default TourSearch;
