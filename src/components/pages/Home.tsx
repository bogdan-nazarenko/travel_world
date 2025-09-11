import { Hero } from "../blocks/Hero.tsx";
import { Services } from "../blocks/Services.tsx";
import { Explore } from "../blocks/Explore.tsx";
import { Experience } from "../blocks/Experience.tsx";
import { Gallery } from "../blocks/Gallery.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <Services suptitleColor={"--light-pink-color"} />
            <Explore />
            <Experience />
            <Gallery />
        </>
    );
};

export default Home;
