import { Hero } from "../blocks/Hero.tsx";
import { Services } from "../blocks/Services.tsx";
import { Explore } from "../blocks/Explore.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <Services suptitleColor={"--light-pink-color"} />
            <Explore />
        </>
    );
};

export default Home;
