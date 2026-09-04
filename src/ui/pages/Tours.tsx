import Banner from "@ui/components/Banner";
import FeaturedTours from "@ui/sections/FeaturedTours";
import background from "@media/images/maldives-2.webp";

const Tours = () => {
    return (
        <>
            <Banner
                image={background}
                title={
                    <>
                        <span>All</span> tours
                    </>
                }
            />
            <FeaturedTours />
        </>
    );
};

export default Tours;
