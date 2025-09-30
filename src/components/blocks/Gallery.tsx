import { useState, useEffect } from "react";
import { type FancyboxOptions, Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import galleryImage1 from "../../assets/media/images/gallery_img_1.jpg";
import galleryImage2 from "../../assets/media/images/gallery_img_2.jpg";
import galleryImage3 from "../../assets/media/images/gallery_img_3.jpg";
import galleryImage4 from "../../assets/media/images/gallery_img_4.jpg";
import galleryImage5 from "../../assets/media/images/gallery_img_5.jpg";
import galleryImage6 from "../../assets/media/images/gallery_img_6.jpg";
import galleryImage7 from "../../assets/media/images/gallery_img_7.jpg";
import galleryImage8 from "../../assets/media/images/gallery_img_8.jpg";
import "../../styles/blocks/Gallery.scss";

const Gallery = () => {
    function useFancybox(options: Partial<FancyboxOptions> = {}) {
        const [root, setRoot] = useState<HTMLElement | null>(null);

        useEffect(() => {
            if (root) {
                Fancybox.bind(root, "[data-fancybox]", options);
                return () => Fancybox.unbind(root);
            }
        }, [root, options]);

        return [setRoot];
    }

    const [fancyboxRef] = useFancybox({
        // custom options
    });

    return (
        <section id="gallery_section">
            <div className="container gallery">
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
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage1}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage1}
                                    alt="Gallery picture 1"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage2}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage2}
                                    alt="Gallery picture 2"
                                />
                            </a>
                        </div>
                        <div className="gallery__column">
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage3}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage3}
                                    alt="Gallery picture 3"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage4}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage4}
                                    alt="Gallery picture 4"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="gallery__column__group">
                        <div className="gallery__column">
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage5}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage5}
                                    alt="Gallery picture 5"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage6}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage6}
                                    alt="Gallery picture 6"
                                />
                            </a>
                        </div>
                        <div className="gallery__column">
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage7}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage7}
                                    alt="Gallery picture 7"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImage8}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImage8}
                                    alt="Gallery picture 8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
