import useFancybox from "@libs/fancybox";
import VideoPlayer from "@markup/components/VideoPlayer";
import mountainTourism from "@media/images/mountain-tourism.jpg";
import video from "@media/videos/fortaleza-de-santa-cruz-da-barra.mp4";
import poster from "@media/images/fortaleza-de-santa-cruz-da-barra.webp";
import louvre from "@media/images/louvre.jpg";
import "./Hero.scss";

const Hero = () => {
    const [fancyboxRef] = useFancybox({});

    return (
        <section className="hero section">
            <div className="hero__container container">
                <div className="hero__info">
                    <span className="hero__superscription superscription">
                        Know before you go
                    </span>
                    <h1 className="hero__title">
                        Traveling opens the door to creating{" "}
                        <span>memories</span>
                    </h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ullam ipsum nobis asperiores soluta voluptas quas
                        voluptates. Molestiae tempora dignissimos, animi
                        praesentium molestias perferendis porro expedita
                        delectus. Soluta natus porro.
                    </p>
                </div>
                <div className="hero__media-group" ref={fancyboxRef}>
                    <a
                        className="hero__image-link"
                        href={mountainTourism}
                        data-fancybox="hero-gallery"
                    >
                        <img
                            className="hero__image"
                            src={mountainTourism}
                            alt="Mountain tourism"
                        />
                    </a>
                    <VideoPlayer
                        className="hero__video-player"
                        videoUrl={video}
                        poster={poster}
                    />
                    <a
                        className="hero__image-link"
                        href={louvre}
                        data-fancybox="hero-gallery"
                    >
                        <img
                            className="hero__image"
                            src={louvre}
                            alt="Louvre"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
