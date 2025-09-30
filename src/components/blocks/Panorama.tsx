import { useLocation } from "react-router-dom";
import aboutImage from "../../assets/media/images/about_img.jpg";
import tourImage from "../../assets/media/images/tour_img.jpg";
import "../../styles/blocks/Panorama.scss";

const Panorama = () => {
    const location = useLocation();

    return (
        <section className="panorama_section">
            <div className="container panorama">
                {location.pathname === "/about" && (
                    <>
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
                    </>
                )}

                {location.pathname === "/tours" && (
                    <>
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
                    </>
                )}
            </div>
        </section>
    );
};

export default Panorama;
