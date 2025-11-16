import elnido from "../../assets/media/images/el_nido.jpg";
import "../../styles/blocks/Overview.scss";

const Overview = () => {
    return (
        <section className="overview">
            <div className="container overview_block">
                <div className="overview__info">
                    <div className="overview__info__item">
                        <h2 className="block__title title--v4 overview__title">
                            Who <span>we are?</span>
                        </h2>
                        <p className="overview__text">
                            We’re all about creating unforgettable experiences
                            for our guests. Our journey began with a simple
                            passion for exploring the beauty of the World.
                        </p>
                    </div>
                    <div className="overview__info__item">
                        <h2 className="block__title title--v4 overview__title">
                            Our <span>mission</span>
                        </h2>
                        <p className="overview__text">
                            We believe that travel is not just about visiting
                            new places, but about immersing yourself in new
                            cultures, connecting with nature, and making
                            memories that last a lifetime.
                        </p>
                    </div>
                </div>
                <div className="overview__image">
                    <img className="overview__pic" src={elnido} alt="El Nido" />
                </div>
            </div>
        </section>
    );
};

export default Overview;
