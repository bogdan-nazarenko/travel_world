import Panorama from "../blocks/Panorama.tsx";
import Overview from "../blocks/Overview.tsx";
import Services from "../blocks/Services.tsx";

const About = () => {
    return (
        <>
            <Panorama />
            <Overview />
            <Services suptitleColor={"--primary-color"} />
        </>
    );
};

export default About;
