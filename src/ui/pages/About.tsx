import Banner from "@ui/components/Banner";
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
        </>
    );
};

export default About;
