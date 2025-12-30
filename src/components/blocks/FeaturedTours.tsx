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

interface TourImageProps {
    suptitle: string;
    title: string;
    image: string;
}

const tourImageProps: TourImageProps[] = [
    { suptitle: "Dubai", title: "UAE", image: dubai },
    { suptitle: "Bali", title: "Indonesia", image: bali },
    { suptitle: "Sydney", title: "Australia", image: sydney },
    { suptitle: "Phetchabun", title: "Thailand", image: phetchabun },
    { suptitle: "Wuxi", title: "China", image: wuxi },
    { suptitle: "Big Ben", title: "London", image: london },
    { suptitle: "Paris", title: "France", image: paris },
    { suptitle: "Maafushi Island", title: "Maldives", image: maafushi },
    { suptitle: "Phi Phi Islands", title: "Thailand", image: phiphi },
    { suptitle: "El Nido", title: "Philippines", image: elnido },
];

const FeaturedTours = () => {
    return (
        <section className="featured_tours">
            <div className="container featured_tours_block">
                <h2 className="featured_tours__title">
                    Our featured <span>tours</span>
                </h2>
                <div className="featured_tours__images">
                    {tourImageProps.map(({ suptitle, title, image }) => {
                        return (
                            <div
                                key={suptitle}
                                className="featured_tours__image"
                            >
                                <div className="featured_tours__captions__wrap">
                                    <div className="featured_tours__image__captions">
                                        <h4 className="featured_tours__image__suptitle">
                                            {suptitle}
                                        </h4>
                                        <h3 className="featured_tours__image__title">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    className="featured_tours__pic"
                                    src={image}
                                    alt={
                                        suptitle === "Big Ben"
                                            ? title
                                            : suptitle
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
