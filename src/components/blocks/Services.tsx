import type { ServicesProps } from "../helpers/types.tsx";
import "../../styles/blocks/Services.scss";

export const Services = ({ suptitleColor }: ServicesProps) => {
    return (
        <section className="services_section">
            <div className="container services">
                <div className="services__info">
                    <span
                        className="services__suptitle"
                        style={{ color: `var(${suptitleColor})` }}
                    >
                        What we serve
                    </span>
                    <h2 className="block__title title--v3">
                        We offer our best services
                    </h2>
                </div>
                <div className="services__elements">
                    <div className="services__item">
                        <div className="services__item__image"></div>
                        <h3 className="services__item__title">
                            Calculate Weather
                        </h3>
                        <p className="block__text text--v3">
                            Lorem ipsum dolor sit amet, adipisicing elit.
                        </p>
                    </div>
                    <div className="services__item">
                        <div className="services__item__image"></div>
                        <h3 className="services__item__title">
                            Best Tour Guide
                        </h3>
                        <p className="block__text text--v3">
                            Lorem ipsum dolor sit amet, adipisicing elit.
                        </p>
                    </div>
                    <div className="services__item">
                        <div className="services__item__image"></div>
                        <h3 className="services__item__title">Customization</h3>
                        <p className="block__text text--v3">
                            Lorem ipsum dolor sit amet, adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
