import { useEffect, useRef } from "react";
import {
    Swiper,
    SwiperSlide,
    type SwiperRef,
    type SwiperClass,
} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper.css";
import { active } from "../helpers/constants.ts";
import john from "../../assets/media/images/john.webp";
import ally from "../../assets/media/images/ally.webp";
import alex from "../../assets/media/images/alex.webp";
import person from "../../assets/media/images/icons/person.svg";
import "../../styles/blocks/Reviews.scss";

const paginationMod: string = "swiper-pagination-bullets-dynamic";

interface ReviewsContentProps {
    image?: string;
    personName: string;
    description?: string;
}

const reviewsContentProps: ReviewsContentProps[] = [
    { image: john, personName: "John Deep", description: "Customer" },
    { image: ally, personName: "Ally Gomez", description: "Customer" },
    { image: alex, personName: "Alex Bugg", description: "Customer" },
    { personName: "Person 4" },
    { personName: "Person 5" },
    { personName: "Person 6" },
    { personName: "Person 7" },
    { personName: "Person 8" },
    { personName: "Person 9" },
    { personName: "Person 10" },
    { personName: "Person 11" },
    { personName: "Person 12" },
];

const Reviews = () => {
    const slider = useRef<SwiperRef | null>(null);

    useEffect(() => {
        const swiper: SwiperClass | undefined = slider.current?.swiper;
        const pagination: HTMLDivElement | null = document.querySelector(
            ".reviews__slider__pagination"
        );

        function updatePagination(): void {
            swiper?.pagination.destroy();
            swiper?.pagination.init();
            swiper?.pagination.update();

            if (window.innerWidth >= 768) {
                if (pagination?.classList.contains(paginationMod)) {
                    pagination.classList.remove(paginationMod);
                }
                if (pagination?.hasAttribute("style")) {
                    pagination.removeAttribute("style");
                }
            }
        }

        window.addEventListener("resize", updatePagination);

        return () => window.removeEventListener("resize", updatePagination);
    }, []);

    return (
        <section className="reviews">
            <div className="container reviews_block">
                <div className="reviews_info">
                    <span className="block__suptitle suptitle--v2">
                        Fans Love
                    </span>
                    <h2 className="block__title title--v1">
                        What our fans say about us
                    </h2>
                </div>

                <Swiper
                    className="reviews__slider"
                    ref={slider}
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        clickableClass: "reviews__slider__pagination",
                        bulletClass: "reviews__slider__bullet",
                        bulletActiveClass: active,
                    }}
                    breakpoints={{
                        1: {
                            spaceBetween: 20,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            pagination: {
                                dynamicBullets: true,
                            },
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            pagination: {
                                dynamicBullets: false,
                            },
                        },
                        1024: {
                            spaceBetween: 46,
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            pagination: {
                                dynamicBullets: false,
                            },
                        },
                    }}
                >
                    {reviewsContentProps.map((props) => {
                        const { image, personName, description } = props;

                        return (
                            <SwiperSlide
                                key={personName}
                                className="reviews__slide"
                            >
                                <p className="block__text text--v2 reviews__text">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Minus sit, explicabo
                                    provident hic distinctio molestias
                                    voluptates nobis alias placeat suscipt earum
                                    debitits recusandae voluptate illum expedita
                                    corrupti aliquid doloribus delectus?
                                </p>
                                <div className="reviews__person">
                                    <div className="reviews__person__image">
                                        <img
                                            loading="lazy"
                                            className="reviews__person__pic"
                                            src={image || person}
                                            alt={personName}
                                        />
                                    </div>
                                    <div className="reviews__person__info">
                                        <h3 className="reviews__person__name">
                                            {personName}
                                        </h3>
                                        <div className="reviews__person__description">
                                            {description || "Lorem"}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
