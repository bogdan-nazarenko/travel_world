import { useDesktop } from "../helpers/responsive.ts";
import tourist from "../../assets/media/images/tourist.png";
import "../../styles/blocks/Newsletter.scss";

const Newsletter = () => {
    const isDesktop = useDesktop();

    return (
        <section className="newsletter">
            <div className="container newsletter_block">
                <div className="newsletter__subscribe">
                    <h2 className="block__title title--v2 newsletter__title">
                        Subscribe now to get useful traveling information
                    </h2>
                    <form className="newsletter__form" action="#">
                        <input
                            className="newsletter__email__input"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            className="newsletter__subscribe__button"
                            type="submit"
                        >
                            Subscribe
                        </button>
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
