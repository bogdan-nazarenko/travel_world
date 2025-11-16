import experienceImage from "../../assets/media/images/experience.png";
import "../../styles/blocks/Experience.scss";

const experienceItemProps: { quantityText: string; description: string }[] = [
    {
        quantityText: "12k+",
        description: "Successful trip",
    },
    {
        quantityText: "2k+",
        description: "Regular clients",
    },
    {
        quantityText: "15",
        description: "Year experience",
    },
];

const Experience = () => {
    return (
        <section className="experience">
            <div className="container experience_block">
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
                        {experienceItemProps.map((props) => {
                            const { quantityText, description } = props;

                            return (
                                <div
                                    key={description}
                                    className="experience__item"
                                >
                                    <div className="experience__item__square">
                                        {quantityText}
                                    </div>
                                    <div className="experience__item__description">
                                        {description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="experience__image">
                    <img
                        loading="lazy"
                        className="experience__pic"
                        src={experienceImage}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
