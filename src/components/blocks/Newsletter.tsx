import { useState, useEffect } from "react";
import tourist from "../../assets/media/images/tourist.png";
import "../../styles/blocks/Newsletter.scss";

const Newsletter = () => {
    const [isDesktop, setDesktop] = useState(true);

    function showImage(): void {
        if (window.innerWidth < 1024) {
            setDesktop(false);
        } else {
            setDesktop(true);
        }
    }

    useEffect(() => {
        showImage();
        window.addEventListener("resize", showImage);

        return () => window.removeEventListener("resize", showImage);
    }, []);

    return (
        <section className="newsletter_section">
            <div className="container newsletter">
                <div className="newsletter__subscribe">
                    <h2 className="block__title title--v2 newsletter__title">
                        Subscribe now to get useful traveling information
                    </h2>
                    <form className="newsletter__form" action="#">
                        <input
                            className="newsletter__email__input"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            className="newsletter__subscribe__input"
                            type="submit"
                            value="Subscribe"
                        />
                    </form>
                    <p className="block__text text--v1 newsletter__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati adipisici sunt in, provident facere ipsam?
                    </p>
                </div>

                {isDesktop && (
                    <div className="newsletter__image">
                        <img
                            className="newsletter__pic"
                            src={tourist}
                            alt="Tourist"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
