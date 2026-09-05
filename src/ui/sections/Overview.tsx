import { tourCatalog } from "@data/images";
import "./Overview.scss";

const Overview = () => {
    return (
        <section className="overview section">
            <div className="overview__container container container_flex">
                <div className="overview__info">
                    <h2 className="overview__title primary-title">
                        Who <span>we are?</span>
                    </h2>
                    <p className="overview__text">
                        We’re all about creating unforgettable experiences for
                        our guests. Our journey began with a simple passion for
                        exploring the beauty of the World.
                    </p>
                    <h2 className="overview__title primary-title">
                        Our <span>mission</span>
                    </h2>
                    <p className="overview__text">
                        We believe that travel is not just about visiting new
                        places, but about immersing yourself in new cultures,
                        connecting with nature, and making memories that last a
                        lifetime.
                    </p>
                </div>
                <div className="overview__image-wrapper">
                    <img
                        className="overview__image"
                        src={tourCatalog.elNido}
                        alt="El Nido"
                    />
                </div>
            </div>
        </section>
    );
};

export default Overview;
