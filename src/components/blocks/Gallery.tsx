import { useState, useEffect } from "react";
import { type FancyboxOptions, Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import galleryImg1 from "../../assets/media/images/gallery_img_1.jpg";
import galleryImg2 from "../../assets/media/images/gallery_img_2.jpg";
import galleryImg3 from "../../assets/media/images/gallery_img_3.jpg";
import galleryImg4 from "../../assets/media/images/gallery_img_4.jpg";
import galleryImg5 from "../../assets/media/images/gallery_img_5.jpg";
import galleryImg6 from "../../assets/media/images/gallery_img_6.jpg";
import galleryImg7 from "../../assets/media/images/gallery_img_7.jpg";
import galleryImg8 from "../../assets/media/images/gallery_img_8.jpg";
import "../../styles/blocks/Gallery.scss";

export const Gallery = () => {
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
                                href={galleryImg1}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg1}
                                    alt="Gallery picture 1"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg2}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg2}
                                    alt="Gallery picture 2"
                                />
                            </a>
                        </div>
                        <div className="gallery__column">
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg3}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg3}
                                    alt="Gallery picture 3"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg4}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg4}
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
                                href={galleryImg5}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg5}
                                    alt="Gallery picture 5"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg6}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg6}
                                    alt="Gallery picture 6"
                                />
                            </a>
                        </div>
                        <div className="gallery__column">
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg7}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg7}
                                    alt="Gallery picture 7"
                                />
                            </a>
                            <a
                                className="gallery__image"
                                data-fancybox="gallery"
                                href={galleryImg8}
                            >
                                <img
                                    loading="lazy"
                                    className="gallery__pic"
                                    src={galleryImg8}
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
