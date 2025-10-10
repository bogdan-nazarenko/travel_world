import dubai from "../../assets/media/images/dubai.jpg";
import bali from "../../assets/media/images/bali.jpg";
import sydney from "../../assets/media/images/sydney.jpg";
import phetchabun from "../../assets/media/images/phetchabun.jpg";
import wuxi from "../../assets/media/images/wuxi.jpg";
import london from "../../assets/media/images/london.jpg";
import paris from "../../assets/media/images/paris.jpg";
import maafushi from "../../assets/media/images/maafushi.jpg";
import phiphi from "../../assets/media/images/phiphi.jpg";
import elnido from "../../assets/media/images/el_nido.jpg";
import "../../styles/blocks/FeaturedTours.scss";

const FeaturedTours = () => {
    return (
        <section className="featured_tours_section">
            <div className="container featured_tours">
                <h2 className="featured_tours__title">
                    Our featured <span>tours</span>
                </h2>
                <div className="featured_tours__images">
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Dubai
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    UAE
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={dubai}
                            alt="Dubai"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Bali
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Indonesia
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={bali}
                            alt="Bali"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Sydney
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Australia
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={sydney}
                            alt="Sydney"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Phetchabun
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Thailand
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={phetchabun}
                            alt="Phetchabun"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Wuxi
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    China
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={wuxi}
                            alt="Wuxi"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Big Ben
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    London
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={london}
                            alt="London"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Paris
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    France
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={paris}
                            alt="Paris"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Maafushi Island
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Maldives
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={maafushi}
                            alt="Maafushi Island"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    Phi Phi Islands
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Thailand
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={phiphi}
                            alt="Phi Phi Islands"
                        />
                    </div>
                    <div className="featured_tours__image">
                        <div className="featured_tours__captions__wrap">
                            <div className="featured_tours__image__captions">
                                <h3 className="featured_tours__image__suptitle">
                                    El Nido
                                </h3>
                                <h3 className="featured_tours__image__title">
                                    Philippines
                                </h3>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            className="featured_tours__pic"
                            src={elnido}
                            alt="El Nido"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
