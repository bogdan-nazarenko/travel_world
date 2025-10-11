import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper.css";
import { useMobile } from "../helpers/responsive.ts";
import john from "../../assets/media/images/john.webp";
import ally from "../../assets/media/images/ally.webp";
import alex from "../../assets/media/images/alex.webp";
import person from "../../assets/media/images/icons/person.svg";
import "../../styles/blocks/Reviews.scss";

interface ReviewsContentProps {
    image?: string;
    personName?: string;
    description?: string;
}

const ReviewsContent = (props: ReviewsContentProps) => {
    return (
        <>
            <p className="block__text text--v2 reviews__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                sit, explicabo provident hic distinctio molestias voluptates
                nobis alias placeat suscipt earum debitits recusandae voluptate
                illum expedita corrupti aliquid doloribus delectus?
            </p>
            <div className="reviews__person">
                <div className="reviews__person__image">
                    <img
                        loading="lazy"
                        className="reviews__person__pic"
                        src={props.image ? props.image : person}
                        alt={props.personName ? props.personName : "Person"}
                    />
                </div>
                <div className="reviews__person__info">
                    <h3 className="reviews__person__name">
                        {props.personName ? props.personName : "Person"}
                    </h3>
                    <div className="reviews__person__description">
                        {props.description ? props.description : "Lorem"}
                    </div>
                </div>
            </div>
        </>
    );
};

const Reviews = () => {
    const isMobile = useMobile();

    return (
        <section className="reviews_section">
            <div className="container reviews">
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
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={
                        !isMobile && {
                            clickable: true,
                            clickableClass: "reviews__slider__pagination",
                            bulletClass: "reviews__slider__bullet",
                            bulletActiveClass: "bullet--active",
                        }
                    }
                    breakpoints={{
                        1: {
                            spaceBetween: 20,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: {
                            spaceBetween: 46,
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                    }}
                >
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent
                            image={john}
                            personName="John Deep"
                            description="Customer"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent
                            image={ally}
                            personName="Ally Gomez"
                            description="Customer"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent
                            image={alex}
                            personName="Alex Bugg"
                            description="Customer"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                    <SwiperSlide className="reviews__slide">
                        <ReviewsContent />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
