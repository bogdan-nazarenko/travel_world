import { Hero } from "../blocks/Hero.tsx";
import { Services } from "../blocks/Services.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <Services suptitleColor={"--light-pink-color"} />
        </>
    );
};

export default Home;
