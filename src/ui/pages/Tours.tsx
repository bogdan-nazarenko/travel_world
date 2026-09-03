import Banner from "@ui/components/Banner";
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
        </>
    );
};

export default Tours;
