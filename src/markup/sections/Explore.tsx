import { tourLinkData } from "@data/links";
import TourLink from "@markup/components/TourLink";
import "./Explore.scss";

const bigBen = tourLinkData.find((link) => link.title === "Big Ben");
const dubai = tourLinkData.find((link) => link.title === "Dubai");
const bali = tourLinkData.find((link) => link.title === "Bali");
const phetchabun = tourLinkData.find((link) => link.title === "Phetchabun");
const sydney = tourLinkData.find((link) => link.title === "Sydney");
const paris = tourLinkData.find((link) => link.title === "Paris");
const wuxi = tourLinkData.find((link) => link.title === "Wuxi");

const Explore = () => {
    return (
        <section className="explore section">
            <div className="container">
                <div className="info">
                    <span className="superscription">Explore</span>
                    <h2 className="title title_v2">Our featured tours</h2>
                </div>
                <div className="catalog">
                    <div className="explore__column">
                        <TourLink
                            className="explore__tour-link"
                            url={bigBen!.url}
                            image={bigBen!.image}
                            title={bigBen!.title}
                            location={bigBen!.location}
                        />
                        <TourLink
                            className="explore__tour-link"
                            url={dubai!.url}
                            image={dubai!.image}
                            title={dubai!.title}
                            location={dubai!.location}
                        />
                    </div>
                    <div className="explore__column">
                        <TourLink
                            className="explore__tour-link"
                            url={bali!.url}
                            image={bali!.image}
                            title={bali!.title}
                            location={bali!.location}
                        />
                        <TourLink
                            className="explore__tour-link"
                            url={phetchabun!.url}
                            image={phetchabun!.image}
                            title={phetchabun!.title}
                            location={phetchabun!.location}
                        />
                    </div>
                    <div className="explore__column">
                        <TourLink
                            className="explore__tour-link explore__tour-link_sydney"
                            url={sydney!.url}
                            image={sydney!.image}
                            title={sydney!.title}
                            location={sydney!.location}
                        />
                        <TourLink
                            className="explore__tour-link"
                            url={paris!.url}
                            image={paris!.image}
                            title={paris!.title}
                            location={paris!.location}
                        />
                        <TourLink
                            className="explore__tour-link"
                            url={wuxi!.url}
                            image={wuxi!.image}
                            title={wuxi!.title}
                            location={wuxi!.location}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
