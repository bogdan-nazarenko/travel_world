import { useState, useEffect, useRef } from "react";
import { type FancyboxOptions, Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
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
    function useFancybox(options: Partial<FancyboxOptions> = {}) {
        const [root, setRoot] = useState<HTMLElement | null>(null);

        useEffect(() => {
            if (root) {
                Fancybox.bind(root, "[data-fancybox]", options);
                return () => Fancybox.unbind(root);
            }
        }, [root, options]);

        return [setRoot];
    }

    const [fancyboxRef] = useFancybox({
        // custom options
    });

    const videoFile = useRef<HTMLVideoElement>(null);
    const [isPlay, setPlay] = useState(false);
    const [view, setView] = useState(false);

    function videoPlay(): void {
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

        if (video) {
            video.requestFullscreen();
        }
    }

    useEffect(() => {
        const video = videoFile.current;

        const playSetter = () => setPlay(true);
        const pauseSetter = () => setPlay(false);
        const viewSetter = () =>
            document.fullscreenElement ? setView(true) : setView(false);

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
        <section className="hero_section">
            <div className="container hero">
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
                            data-fancybox="hero__image"
                            href={heroImage1}
                        >
                            <img
                                className="hero__pic"
                                src={heroImage1}
                                alt="Hero image"
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
                                onClick={videoPlay}
                                onDoubleClick={videoFullScreen}
                            ></video>
                            <button
                                className="video__control"
                                style={{
                                    backgroundImage: `url("${isPlay ? play : pause}")`,
                                }}
                                onClick={videoPlay}
                            ></button>
                            <button
                                className="mobile__full__screen"
                                style={{
                                    backgroundImage: `url("${fullScreen}")`,
                                }}
                                onClick={videoFullScreen}
                            ></button>
                        </div>
                        <a
                            className="hero__media__content"
                            data-fancybox="hero__image"
                            href={heroImage2}
                        >
                            <img
                                className="hero__pic"
                                src={heroImage2}
                                alt="Hero image"
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
