import { useState } from "react";
import useMediaQuery from "@utils/responsive";
import { tourLinkData } from "@data/links";
import SearchWidget from "@ui/components/SearchWidget";
import { Plane } from "@ui/components/vectors";
import TourLink, { type TourLinkProps } from "@ui/components/TourLink";
import "./FeaturedTours.scss";

const tourLinkOrder: string[] = [
    "Dubai",
    "Bali",
    "Sydney",
    "Phetchabun",
    "Wuxi",
    "Big Ben",
    "Paris",
    "Maafushi Island",
    "Phi Phi Island",
    "El Nido",
];

const largeLinkIndexes: number[] = [0, 1, 5, 6];

const FeaturedTours = () => {
    const isDesktop = useMediaQuery("width >= 1024px");
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <section className="featured-tours section">
            <div className="featured-tours__container container">
                <SearchWidget className="featured-tours__search-widget" />
                {isDesktop && <Plane />}

                <h2 className="featured-tours__title">
                    Our featured <span>tours</span>
                </h2>
                <div className="featured-tours__catalog">
                    {tourLinkOrder.map((name, index) => {
                        const { url, image, title, location } =
                            tourLinkData.find(
                                (link) => link.title === name
                            ) as TourLinkProps;

                        return (
                            <TourLink
                                className={`featured-tours__tour-link ${largeLinkIndexes.includes(index) ? "featured-tours__tour-link_size_large" : "featured-tours__tour-link_size_small"}`.trim()}
                                url={url}
                                image={image}
                                title={title}
                                location={location}
                                key={title}
                            />
                        );
                    })}
                </div>

                {loaded ? (
                    <div className="featured-tours__notification" role="status">
                        All tours loaded
                    </div>
                ) : (
                    <button
                        className="featured-tours__load-button outlined-button"
                        onClick={() => setLoaded(true)}
                    >
                        Load more
                    </button>
                )}
            </div>
        </section>
    );
};

export default FeaturedTours;
