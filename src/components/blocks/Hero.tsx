import { useState, useEffect, useRef } from "react";
import useFancybox from "../libs/fancybox.ts";
import SearchBar from "../elements/SearchBar.tsx";
import worldIcon from "../../assets/media/images/icons/world.png";
import heroImage1 from "../../assets/media/images/hero_img_1.jpg";
import heroImage2 from "../../assets/media/images/hero_img_2.jpg";
import heroVideo from "../../assets/media/videos/hero-video.mp4";
import videoFrame from "../../assets/media/images/videoframe.webp";
import play from "../../assets/media/images/icons/play.svg";
import pause from "../../assets/media/images/icons/pause.svg";
import fullScreen from "../../assets/media/images/icons/full-screen.svg";
import "../../styles/blocks/Hero.scss";

const Hero = () => {
    const [fancyboxRef] = useFancybox({
        // custom options
    });

    const videoFile = useRef<HTMLVideoElement | null>(null);
    const [isPlay, setPlay] = useState(false);
    const [view, setView] = useState(false);

    function toggleVideoPlayback(): void {
        const video = videoFile.current;

        if (video && !document.fullscreenElement) {
            if (isPlay === false) {
                video.play();
            } else {
                video.pause();
            }
        }
    }

    function videoFullScreen(): void {
        const video = videoFile.current;

        video?.requestFullscreen();
    }

    useEffect(() => {
        const video = videoFile.current;

        const playSetter = () => setPlay(true);
        const pauseSetter = () => setPlay(false);
        const viewSetter = () => setView(document.fullscreenElement !== null);

        if (video) {
            video.addEventListener("play", playSetter);
            video.addEventListener("pause", pauseSetter);
            video.addEventListener("ended", pauseSetter);
            video.addEventListener("fullscreenchange", viewSetter);

            return () => {
                video.removeEventListener("play", playSetter);
                video.removeEventListener("pause", pauseSetter);
                video.removeEventListener("ended", pauseSetter);
                video.removeEventListener("fullscreenchange", viewSetter);
            };
        }
    }, []);

    return (
        <section className="hero">
            <div className="container hero_block">
                <div className="hero__content">
                    <div className="hero__info">
                        <span className="block__suptitle suptitle--v1 hero__suptitle">
                            Know Before You Go{" "}
                            <img
                                className="world__icon"
                                src={worldIcon}
                                alt="World"
                            />
                        </span>
                        <h1 className="hero__title">
                            Traveling opens the door to creating{" "}
                            <span className="hero__title--highlight">
                                memories
                            </span>
                        </h1>
                        <p className="block__text text--v1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ullam ipsum nobis asperiores soluta voluptas
                            quas voluptates. Molestiae tempora dignissimos,
                            animi praesentium molestias perferendis porro
                            expedita delectus. Soluta natus porro.
                        </p>
                    </div>
                    <div className="hero__media" ref={fancyboxRef}>
                        <a
                            className="hero__media__content"
                            data-fancybox="hero-photo"
                            href={heroImage1}
                        >
                            <img
                                className="hero__pic"
                                src={heroImage1}
                                alt="A man in the mountains"
                            />
                        </a>
                        <div className="hero__media__content">
                            <video
                                className={"hero__video"}
                                src={heroVideo}
                                poster={videoFrame}
                                ref={videoFile}
                                style={{
                                    objectFit: `${view ? "contain" : "cover"}`,
                                }}
                                controls={view}
                                onClick={toggleVideoPlayback}
                                onDoubleClick={videoFullScreen}
                            ></video>
                            <button
                                className="video__control"
                                style={{
                                    backgroundImage: `url("${isPlay ? play : pause}")`,
                                }}
                                onClick={toggleVideoPlayback}
                            ></button>
                            <button
                                className="video__fullscreen"
                                style={{
                                    backgroundImage: `url("${fullScreen}")`,
                                }}
                                onClick={videoFullScreen}
                            ></button>
                        </div>
                        <a
                            className="hero__media__content"
                            data-fancybox="hero-photo"
                            href={heroImage2}
                        >
                            <img
                                className="hero__pic"
                                src={heroImage2}
                                alt="Louvre"
                            />
                        </a>
                    </div>
                </div>
                <SearchBar />
            </div>
        </section>
    );
};

export default Hero;
