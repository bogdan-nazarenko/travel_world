import type React from "react";
import "./Banner.scss";

const Banner = ({
    image,
    title,
}: {
    image: string;
    title: React.ReactNode;
}) => {
    return (
        <div className="banner">
            <img className="banner__image" src={image} alt="" />
            <div className="banner__inner">
                <h1 className="banner__title title_v_3">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
