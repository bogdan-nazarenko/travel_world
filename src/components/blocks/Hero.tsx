import { useState, useEffect } from "react";
import { SearchBar } from "../elements/SearchBar.tsx";
import worldIcon from "../../assets/media/images/icons/world.png";
import heroImage1 from "../../assets/media/images/hero_img_1.jpg";
import heroImage2 from "../../assets/media/images/hero_img_2.jpg";
import heroVideo from "../../assets/media/videos/hero-video.mp4";
import play from "../../assets/media/images/icons/play.svg";
import pause from "../../assets/media/images/icons/pause.svg";
import fullScreen from "../../assets/media/images/icons/full-screen.svg";
import "../../styles/blocks/Hero.scss";

export const Hero = () => {
    const [isPlay, setPlay] = useState(false);
    const [view, setView] = useState(false);

    function videoPlay(): void {
        const videoFile = document.querySelector(
            ".hero__video"
        ) as HTMLVideoElement;

        if (!document.fullscreenElement) {
            if (isPlay === false) {
                videoFile.play();
            } else {
                videoFile.pause();
            }
        }
    }

    function videoFullScreen(): void {
        const videoFile = document.querySelector(
            ".hero__video"
        ) as HTMLVideoElement;

        videoFile.requestFullscreen();
    }

    useEffect((): void => {
        const videoFile = document.querySelector(
            ".hero__video"
        ) as HTMLVideoElement;

        videoFile.addEventListener("play", (): void => {
            setPlay(true);
        });
        videoFile.addEventListener("pause", (): void => {
            setPlay(false);
        });
        videoFile.addEventListener("ended", (): void => {
            setPlay(false);
        });
        videoFile.addEventListener("fullscreenchange", (): void => {
            if (document.fullscreenElement) {
                setView(true);
            } else {
                setView(false);
            }
        });
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
                    <div className="hero__media">
                        <div className="hero__media__content">
                            <img
                                className="hero__pic"
                                src={heroImage1}
                                alt="Hero image"
                            />
                        </div>
                        <div className="hero__media__content">
                            <video
                                className={"hero__video"}
                                src={heroVideo}
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
                        <div className="hero__media__content">
                            <img
                                className="hero__pic"
                                src={heroImage2}
                                alt="Hero image"
                            />
                        </div>
                    </div>
                </div>
                <SearchBar />
            </div>
        </section>
    );
};
