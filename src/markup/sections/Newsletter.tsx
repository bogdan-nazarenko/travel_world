import useMediaQuery from "@utils/responsive";
import image from "@media/images/tourist.png";
import "./Newsletter.scss";

const Newsletter = () => {
    const isDesktop = useMediaQuery("width >= 1024px");

    return (
        <section className="newsletter section">
            <div
                className={`container ${isDesktop ? "container_flex" : ""}`.trim()}
            >
                <div className="newsletter__info">
                    <h2 className="newsletter__title title">
                        Subscribe now to get useful traveling information
                    </h2>
                    <form
                        className="newsletter__form"
                        action="#"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <input
                            className="newsletter__field"
                            id="subscription"
                            type="text"
                            name="subscription"
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            required
                        />
                        <button
                            className="newsletter__button button"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="newsletter__text text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati adipisici sunt in, provident facere ipsam?
                    </p>
                </div>
                {isDesktop && (
                    <div className="newsletter__image-wrapper">
                        <img
                            loading="lazy"
                            className="newsletter__image"
                            src={image}
                            alt=""
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
