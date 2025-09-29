import tourImage from "../../assets/media/images/tour_img.jpg";
import aboutImage from "../../assets/media/images/about_img.jpg";
import "../../styles/blocks/Panorama.scss";

export const AllTours = () => {
    return (
        <section className="panorama_section">
            <div className="container panorama">
                <div className="panorama__title__wrap">
                    <h1 className="panorama__title">
                        <span>All</span> tours
                    </h1>
                </div>
                <img
                    className="panoramic__image"
                    src={tourImage}
                    alt="Panoramic image"
                />
            </div>
        </section>
    );
};

export const AboutUs = () => {
    return (
        <section className="panorama_section">
            <div className="container panorama">
                <div className="panorama__title__wrap">
                    <h1 className="panorama__title">
                        About <span>us</span>
                    </h1>
                </div>
                <img
                    className="panoramic__image"
                    src={aboutImage}
                    alt="Panoramic image"
                />
            </div>
        </section>
    );
};
