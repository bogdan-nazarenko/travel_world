import Banner from "@ui/components/Banner";
import Overview from "@ui/sections/Overview";
import Services from "@ui/sections/Services";
import background from "@media/images/maldives-3.webp";

const About = () => {
    return (
        <>
            <Banner
                image={background}
                title={
                    <>
                        <span>About</span> us
                    </>
                }
            />
            <Overview />
            <Services />
        </>
    );
};

export default About;
