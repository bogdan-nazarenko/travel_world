import dubai from "../../assets/media/images/dubai.jpg";
import bali from "../../assets/media/images/bali.jpg";
import sydney from "../../assets/media/images/sydney.jpg";
import phetchabun from "../../assets/media/images/phetchabun.jpg";
import wuxi from "../../assets/media/images/wuxi.jpg";
import london from "../../assets/media/images/london.jpg";
import paris from "../../assets/media/images/paris.jpg";
import maafushi from "../../assets/media/images/maafushi.jpg";
import phiphi from "../../assets/media/images/phiphi.jpg";
import elnido from "../../assets/media/images/el_nido.jpg";
import "../../styles/blocks/FeaturedTours.scss";

interface ToursImageProps {
    suptitle: string;
    title: string;
    image: string;
    alt: string;
}

const FeaturedToursImage = (props: ToursImageProps) => {
    return (
        <div className="featured_tours__image">
            <div className="featured_tours__captions__wrap">
                <div className="featured_tours__image__captions">
                    <h3 className="featured_tours__image__suptitle">
                        {props.suptitle}
                    </h3>
                    <h3 className="featured_tours__image__title">
                        {props.title}
                    </h3>
                </div>
            </div>
            <img
                loading="lazy"
                className="featured_tours__pic"
                src={props.image}
                alt={props.alt}
            />
        </div>
    );
};

const FeaturedTours = () => {
    return (
        <section className="featured_tours_section">
            <div className="container featured_tours">
                <h2 className="featured_tours__title">
                    Our featured <span>tours</span>
                </h2>
                <div className="featured_tours__images">
                    <FeaturedToursImage
                        suptitle="Dubai"
                        title="UAE"
                        image={dubai}
                        alt="Dubai"
                    />
                    <FeaturedToursImage
                        suptitle="Bali"
                        title="Indonesia"
                        image={bali}
                        alt="Bali"
                    />
                    <FeaturedToursImage
                        suptitle="Sydney"
                        title="Australia"
                        image={sydney}
                        alt="Sydney"
                    />
                    <FeaturedToursImage
                        suptitle="Phetchabun"
                        title="Thailand"
                        image={phetchabun}
                        alt="Phetchabun"
                    />
                    <FeaturedToursImage
                        suptitle="Wuxi"
                        title="China"
                        image={wuxi}
                        alt="Wuxi"
                    />
                    <FeaturedToursImage
                        suptitle="Big Ben"
                        title="London"
                        image={london}
                        alt="London"
                    />
                    <FeaturedToursImage
                        suptitle="Paris"
                        title="France"
                        image={paris}
                        alt="Paris"
                    />
                    <FeaturedToursImage
                        suptitle="Maafushi Island"
                        title="Maldives"
                        image={maafushi}
                        alt="Maafushi Island"
                    />
                    <FeaturedToursImage
                        suptitle="Phi Phi Islands"
                        title="Thailand"
                        image={phiphi}
                        alt="Phi Phi Islands"
                    />
                    <FeaturedToursImage
                        suptitle="El Nido"
                        title="Philippines"
                        image={elnido}
                        alt="El Nido"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
