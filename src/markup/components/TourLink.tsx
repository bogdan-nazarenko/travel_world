import { Link } from "react-router";
import "./TourLink.scss";

export interface TourLinkProps {
    className?: string;
    url: string;
    image: string;
    title: string;
    location: string;
}

const TourLink = ({
    className = "",
    url,
    image,
    title,
    location,
}: TourLinkProps) => {
    return (
        <Link
            className={`${className} tour-link`.trim()}
            to={url}
            onClick={
                url === "#" ? (event) => event.preventDefault() : undefined
            }
        >
            <img className="tour-link__image" src={image} alt="" />
            <div className="tour-link__content">
                <span className="tour-link__title">{title}</span>
                <span className="tour-link__location">{location}</span>
            </div>
        </Link>
    );
};

export default TourLink;
