import london from "../../assets/media/images/london.jpg";
import bali from "../../assets/media/images/bali.jpg";
import sydney from "../../assets/media/images/sydney.jpg";
import dubai from "../../assets/media/images/dubai.jpg";
import phetchabun from "../../assets/media/images/phetchabun.jpg";
import paris from "../../assets/media/images/paris.jpg";
import wuxi from "../../assets/media/images/wuxi.jpg";
import "../../styles/blocks/Explore.scss";

interface ExploreImageProps {
    suptitle: string;
    title: string;
    image: string;
    alt: string;
}

const ExploreImage = ({ suptitle, title, image, alt }: ExploreImageProps) => {
    return (
        <div className="explore__image">
            <div className="explore__captions__wrap">
                <div className="explore__image__captions">
                    <h4 className="explore__image__suptitle">{suptitle}</h4>
                    <h3 className="explore__image__title">{title}</h3>
                </div>
            </div>
            <img
                loading="lazy"
                className="explore__pic"
                src={image}
                alt={alt}
            />
        </div>
    );
};

const Explore = () => {
    return (
        <section className="explore">
            <div className="container explore_block">
                <div className="explore__info">
                    <span className="block__suptitle suptitle--v2">
                        Explore
                    </span>
                    <h2 className="block__title title--v1">
                        Our featured tours
                    </h2>
                </div>
                <div className="explore__images">
                    <div className="explore__column">
                        <ExploreImage
                            suptitle="Big Ben"
                            title="London"
                            image={london}
                            alt="London"
                        />
                        <ExploreImage
                            suptitle="Dubai"
                            title="UAE"
                            image={dubai}
                            alt="Dubai"
                        />
                    </div>
                    <div className="explore__column">
                        <ExploreImage
                            suptitle="Bali"
                            title="Indonesia"
                            image={bali}
                            alt="Bali"
                        />
                        <ExploreImage
                            suptitle="Phetchabun"
                            title="Thailand"
                            image={phetchabun}
                            alt="Phetchabun"
                        />
                    </div>
                    <div className="explore__column">
                        <ExploreImage
                            suptitle="Sydney"
                            title="Australia"
                            image={sydney}
                            alt="Sydney"
                        />
                        <div className="explore__column__group">
                            <ExploreImage
                                suptitle="Paris"
                                title="France"
                                image={paris}
                                alt="Paris"
                            />
                            <ExploreImage
                                suptitle="Wuxi"
                                title="China"
                                image={wuxi}
                                alt="Wuxi"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
