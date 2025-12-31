import { lightPinkColor } from "../helpers/constants.ts";
import "../../styles/blocks/Services.scss";

const servicesTitles: string[] = [
    "Calculate Weather",
    "Best Tour Guide",
    "Customization",
];

const Services = ({ suptitleColor }: { suptitleColor?: string }) => {
    return (
        <section className="services">
            <div className="container services_block">
                <div className="services__info">
                    <span
                        className="services__suptitle"
                        style={{
                            color: `var(${suptitleColor ? suptitleColor : lightPinkColor})`,
                        }}
                    >
                        What we serve
                    </span>
                    <h2 className="block__title title--v3">
                        We offer our best services
                    </h2>
                </div>
                <div className="services__elements">
                    {servicesTitles.map((title) => {
                        return (
                            <div key={title} className="services__item">
                                <div className="services__item__image"></div>
                                <h3 className="services__item__title">
                                    {title}
                                </h3>
                                <p className="block__text text--v3">
                                    Lorem ipsum dolor sit amet, adipisicing
                                    elit.
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
