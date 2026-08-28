import "./Feature.scss";

export interface FeatureProps {
    className?: string;
    iconModifier: string;
    title: string;
    text: string;
}

const Feature = ({
    className = "",
    iconModifier,
    title,
    text,
}: FeatureProps) => {
    return (
        <article className={`${className} feature`.trim()}>
            <div className={`feature__icon ${iconModifier}`}></div>
            <h2 className="feature__title">{title}</h2>
            <p className="feature__text text">{text}</p>
        </article>
    );
};

export default Feature;
