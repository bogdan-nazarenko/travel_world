import Panorama from "../blocks/Panorama.tsx";
import Overview from "../blocks/Overview.tsx";
import Services from "../blocks/Services.tsx";
import { primaryColor } from "../helpers/constants.ts";

const About = () => {
    return (
        <>
            <Panorama />
            <Overview />
            <Services suptitleColor={primaryColor} />
        </>
    );
};

export default About;
