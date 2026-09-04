import useFancybox from "@libs/fancybox";
import { tourCatalog } from "@data/images";
import "./Gallery.scss";

const GalleryImageLink = ({ image, alt }: { image: string; alt: string }) => (
    <a className="gallery__image-link" href={image} data-fancybox="gallery">
        <img loading="lazy" className="gallery__image" src={image} alt={alt} />
    </a>
);

const Gallery = () => {
    const [fancyboxRef] = useFancybox({});

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <div className="gallery__info info">
                    <span className="superscription">Gallery</span>
                    <h2 className="secondary-title">
                        Visit our customers tour gallery
                    </h2>
                </div>
                <div className="catalog" ref={fancyboxRef}>
                    <div className="gallery__column">
                        <GalleryImageLink
                            image={tourCatalog.manali}
                            alt="Himalayan mountains in Manali"
                        />
                        <GalleryImageLink
                            image={tourCatalog.elNido}
                            alt="El Nido"
                        />
                    </div>
                    <div className="gallery__column">
                        <GalleryImageLink
                            image={tourCatalog.pamukkale}
                            alt="Pamukkale"
                        />
                        <GalleryImageLink
                            image={tourCatalog.maafushi}
                            alt="Maafushi Island"
                        />
                    </div>
                    <div className="gallery__column">
                        <GalleryImageLink
                            image={tourCatalog.mangunan}
                            alt="Mangunan Pine Forest"
                        />
                        <GalleryImageLink
                            image={tourCatalog.krakow}
                            alt="Church of the Assumption of the Blessed Virgin Mary, Krakow"
                        />
                    </div>
                    <div className="gallery__column">
                        <GalleryImageLink
                            image={tourCatalog.maldives}
                            alt="Maldives"
                        />
                        <GalleryImageLink
                            image={tourCatalog.phiphi}
                            alt="Phi Phi Island"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
