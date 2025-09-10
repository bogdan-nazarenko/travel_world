import experienceImage from "../../assets/media/images/experience.png";
import "../../styles/blocks/Experience.scss";

export const Experience = () => {
    return (
        <section className="experience_section">
            <div className="container experience">
                <div className="experience__info">
                    <span className="block__suptitle suptitle--v1 ">
                        Experience
                    </span>
                    <h2 className="block__title title--v3 experience__title">
                        With our all experience we will serve you
                    </h2>
                    <p className="experience__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas aliquam, hic tempora inventore suscipit unde.
                    </p>
                    <div className="experience__elements">
                        <div className="experience__item">
                            <div className="experience__item__square">12k+</div>
                            <div className="experience__item__description">
                                Successful trip
                            </div>
                        </div>
                        <div className="experience__item">
                            <div className="experience__item__square">2k+</div>
                            <div className="experience__item__description">
                                Regular clients
                            </div>
                        </div>
                        <div className="experience__item">
                            <div className="experience__item__square">15</div>
                            <div className="experience__item__description">
                                Year experience
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__image">
                    <img
                        className="experience__pic"
                        src={experienceImage}
                        alt="Experience"
                    />
                </div>
            </div>
        </section>
    );
};
