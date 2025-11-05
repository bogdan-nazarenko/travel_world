import "../../styles/blocks/Services.scss";

const Services = ({ suptitleColor }: { suptitleColor: string }) => {
    const titles: string[] = [
        "Calculate Weather",
        "Best Tour Guide",
        "Customization",
    ];

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
                    {titles.map((title) => {
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
