import "../../styles/blocks/Services.scss";

const ServicesItem = ({ title }: { title: string }) => {
    return (
        <div className="services__item">
            <div className="services__item__image"></div>
            <h3 className="services__item__title">{title}</h3>
            <p className="block__text text--v3">
                Lorem ipsum dolor sit amet, adipisicing elit.
            </p>
        </div>
    );
};

const Services = ({ suptitleColor }: { suptitleColor: string }) => {
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
                    <ServicesItem title="Calculate Weather" />
                    <ServicesItem title="Best Tour Guide" />
                    <ServicesItem title="Customization" />
                </div>
            </div>
        </section>
    );
};

export default Services;
