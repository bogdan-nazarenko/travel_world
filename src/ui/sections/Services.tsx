import { useLocation } from "react-router";
import Feature, { type FeatureProps } from "@ui/components/Feature";
import "./Services.scss";

const features: FeatureProps[] = [
    {
        iconModifier: "feature__icon_weather",
        title: "Calculate Weather",
        text: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
    {
        iconModifier: "feature__icon_guide",
        title: "Best Tour Guide",
        text: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
    {
        iconModifier: "feature__icon_custom",
        title: "Customization",
        text: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
];

const Services = () => {
    const { pathname } = useLocation();

    return (
        <section className="services section">
            <div className="services__container container container_flex">
                <div className="services__info">
                    <span
                        className={`services__superscription ${pathname === "/" ? "services__superscription_color_pink" : ""}`.trim()}
                    >
                        What we serve
                    </span>
                    <h2 className="primary-title">
                        We offer our best services
                    </h2>
                </div>
                <div className="services__feature-group">
                    {features.map((props) => {
                        const { iconModifier, title, text } = props;

                        return (
                            <Feature
                                key={title}
                                iconModifier={iconModifier}
                                title={title}
                                text={text}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
