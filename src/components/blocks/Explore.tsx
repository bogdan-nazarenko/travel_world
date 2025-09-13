import london from "../../assets/media/images/london.jpg";
import bali from "../../assets/media/images/bali.jpg";
import sydney from "../../assets/media/images/sydney.jpg";
import dubai from "../../assets/media/images/dubai.jpg";
import phetchabun from "../../assets/media/images/phetchabun.jpg";
import paris from "../../assets/media/images/paris.jpg";
import wuxi from "../../assets/media/images/wuxi.jpg";
import "../../styles/blocks/Explore.scss";

export const Explore = () => {
    return (
        <section className="explore_section">
            <div className="container explore">
                <div className="explore__info">
                    <span className="block__suptitle suptitle--v2">
                        Explore
                    </span>
                    <h2 className="block__title title--v1">
                        Our featured tours
                    </h2>
                </div>
                <div className="explore__images">
                    <div className="explore__column">
                        <div className="explore__image">
                            <div className="explore__captions__wrap">
                                <div className="explore__image__captions">
                                    <h3 className="explore__image__suptitle">
                                        Big Ben
                                    </h3>
                                    <h3 className="explore__image__title">
                                        London
                                    </h3>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="explore__pic"
                                src={london}
                                alt="London"
                            />
                        </div>
                        <div className="explore__image">
                            <div className="explore__captions__wrap">
                                <div className="explore__image__captions">
                                    <h3 className="explore__image__suptitle">
                                        Dubai
                                    </h3>
                                    <h3 className="explore__image__title">
                                        UAE
                                    </h3>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="explore__pic"
                                src={dubai}
                                alt="Dubai"
                            />
                        </div>
                    </div>
                    <div className="explore__column">
                        <div className="explore__image">
                            <div className="explore__captions__wrap">
                                <div className="explore__image__captions">
                                    <h3 className="explore__image__suptitle">
                                        Bali
                                    </h3>
                                    <h3 className="explore__image__title">
                                        Indonesia
                                    </h3>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="explore__pic"
                                src={bali}
                                alt="Bali"
                            />
                        </div>
                        <div className="explore__image">
                            <div className="explore__captions__wrap">
                                <div className="explore__image__captions">
                                    <h3 className="explore__image__suptitle">
                                        Phetchabun
                                    </h3>
                                    <h3 className="explore__image__title">
                                        Thailand
                                    </h3>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="explore__pic"
                                src={phetchabun}
                                alt="Phetchabun"
                            />
                        </div>
                    </div>
                    <div className="explore__column">
                        <div className="explore__image">
                            <div className="explore__captions__wrap">
                                <div className="explore__image__captions">
                                    <h3 className="explore__image__suptitle">
                                        Sydney
                                    </h3>
                                    <h3 className="explore__image__title">
                                        Australia
                                    </h3>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="explore__pic"
                                src={sydney}
                                alt="Sydney"
                            />
                        </div>
                        <div className="explore__column__group">
                            <div className="explore__image">
                                <div className="explore__captions__wrap">
                                    <div className="explore__image__captions">
                                        <h3 className="explore__image__suptitle">
                                            Paris
                                        </h3>
                                        <h3 className="explore__image__title">
                                            France
                                        </h3>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    className="explore__pic"
                                    src={paris}
                                    alt="Paris"
                                />
                            </div>
                            <div className="explore__image">
                                <div className="explore__captions__wrap">
                                    <div className="explore__image__captions">
                                        <h3 className="explore__image__suptitle">
                                            Wuxi
                                        </h3>
                                        <h3 className="explore__image__title">
                                            China
                                        </h3>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    className="explore__pic"
                                    src={wuxi}
                                    alt="Wuxi"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
