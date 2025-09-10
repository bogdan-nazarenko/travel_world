import { Hero } from "../blocks/Hero.tsx";
import { Services } from "../blocks/Services.tsx";
import { Explore } from "../blocks/Explore.tsx";
import { Experience } from "../blocks/Experience.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <Services suptitleColor={"--light-pink-color"} />
            <Explore />
            <Experience />
        </>
    );
};

export default Home;
