import image from "@media/images/experience.png";
import "./Experience.scss";

const Experience = () => {
    return (
        <section className="experience section">
            <div className="experience__container container">
                <div className="experience__info">
                    <span className="experience__superscription superscription">
                        Experience
                    </span>
                    <h2 className="experience__title title">
                        With our all experience we will serve you
                    </h2>
                    <p className="experience__text text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas aliquam, hic tempora inventore suscipit unde.
                    </p>
                    <ul className="experience__list">
                        <li className="experience__list-item">
                            <div className="experience__square">12k+</div>
                            <span>Successful trip</span>
                        </li>
                        <li className="experience__list-item">
                            <div className="experience__square">2k+</div>
                            <span>Regular clients</span>
                        </li>
                        <li className="experience__list-item">
                            <div className="experience__square">15</div>
                            <span>Year experience</span>
                        </li>
                    </ul>
                </div>
                <div className="experience__image-wrapper">
                    <img className="experience__image" src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
