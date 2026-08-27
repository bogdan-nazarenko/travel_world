import { useState, useRef, useEffect } from "react";
import "./VideoPlayer.scss";

interface VideoPlayerProps {
    className?: string;
    videoUrl: string;
    poster?: string;
}

const VideoPlayer = ({
    className = "",
    videoUrl,
    poster,
}: VideoPlayerProps) => {
    const [play, setPlay] = useState<boolean>(false);
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    function toggleVideoPlayback(): void {
        if (fullscreen) return;

        if (!play) {
            videoRef.current?.play();
            return;
        }

        videoRef.current?.pause();
    }

    function enableFullscreenMode(): void {
        videoRef.current?.requestFullscreen();
    }

    useEffect(() => {
        function handler(): void {
            setFullscreen(() => {
                return document.fullscreenElement === videoRef.current;
            });
        }

        document.addEventListener("fullscreenchange", handler);

        return () => document.removeEventListener("fullscreenchange", handler);
    }, []);

    return (
        <div className={`${className} video-player`.trim()}>
            <video
                className={`video-player__video ${fullscreen ? "video-player__video_contain" : ""}`.trim()}
                src={videoUrl}
                poster={poster}
                controls={fullscreen}
                ref={videoRef}
                onClick={toggleVideoPlayback}
                onDoubleClick={enableFullscreenMode}
                onPlay={() => setPlay(true)}
                onPause={() => setPlay(false)}
                onEnded={() => videoRef.current?.load()}
            ></video>
            <button
                className={`video-player__play-button ${play ? "video-player__play-button_active" : ""}`.trim()}
                aria-label={play ? "Pause video" : "Play video"}
                onClick={toggleVideoPlayback}
            ></button>
            <button
                className="video-player__fullscreen-button"
                aria-label="Full screen"
                onClick={enableFullscreenMode}
            ></button>
        </div>
    );
};

export default VideoPlayer;
