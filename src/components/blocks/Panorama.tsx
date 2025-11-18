import { useLocation } from "react-router-dom";
import { main } from "../helpers/constants.ts";
import aboutImage from "../../assets/media/images/about_img.jpg";
import tourImage from "../../assets/media/images/tour_img.jpg";
import "../../styles/blocks/Panorama.scss";

const Panorama = () => {
    const { pathname } = useLocation();

    return (
        <section>
            <div className="container panorama_block">
                {pathname === main.about && (
                    <>
                        <div className="panorama__title__wrap">
                            <h1 className="panorama__title">
                                About <span>us</span>
                            </h1>
                        </div>
                        <img
                            className="panoramic__image"
                            src={aboutImage}
                            alt=""
                        />
                    </>
                )}

                {pathname === main.tours && (
                    <>
                        <div className="panorama__title__wrap">
                            <h1 className="panorama__title">
                                <span>All</span> tours
                            </h1>
                        </div>
                        <img
                            className="panoramic__image"
                            src={tourImage}
                            alt=""
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default Panorama;
