import useFancybox from "../libs/fancybox.ts";
import { identifiers } from "../helpers/constants.ts";
import manali from "../../assets/media/images/manali.jpg";
import elnido from "../../assets/media/images/el_nido.jpg";
import pamukkale from "../../assets/media/images/pamukkale.jpg";
import maafushi from "../../assets/media/images/maafushi.jpg";
import mangunan from "../../assets/media/images/mangunan.jpg";
import krakow from "../../assets/media/images/krakow.jpg";
import maldives from "../../assets/media/images/maldives.jpg";
import phiphi from "../../assets/media/images/phiphi.jpg";
import "../../styles/blocks/Gallery.scss";

const GalleryImage = ({ image, alt }: { image: string; alt: string }) => {
    return (
        <a
            className="gallery__image"
            data-fancybox="gallery-photo"
            href={image}
        >
            <img
                loading="lazy"
                className="gallery__pic"
                src={image}
                alt={alt}
            />
        </a>
    );
};

const Gallery = () => {
    const [fancyboxRef] = useFancybox({
        // custom options
    });

    const { gallery } = identifiers;

    return (
        <section id={gallery}>
            <div className="container gallery_block">
                <div className="gallery__info">
                    <span className="block__suptitle suptitle--v2">
                        Gallery
                    </span>
                    <h2 className="block__title title--v1">
                        Visit our customers tour gallery
                    </h2>
                </div>
                <div className="gallery__images" ref={fancyboxRef}>
                    <div className="gallery__column__group">
                        <div className="gallery__column">
                            <GalleryImage image={manali} alt="Manali" />
                            <GalleryImage image={elnido} alt="El Nido" />
                        </div>
                        <div className="gallery__column">
                            <GalleryImage image={pamukkale} alt="Pamukkale" />
                            <GalleryImage
                                image={maafushi}
                                alt="Maafushi Island"
                            />
                        </div>
                    </div>
                    <div className="gallery__column__group">
                        <div className="gallery__column">
                            <GalleryImage
                                image={mangunan}
                                alt="Mangunan Pines Forests"
                            />
                            <GalleryImage image={krakow} alt="Krakow" />
                        </div>
                        <div className="gallery__column">
                            <GalleryImage image={maldives} alt="Maldives" />
                            <GalleryImage
                                image={phiphi}
                                alt="Phi Phi Islands"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
