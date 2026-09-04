import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import useMediaQuery from "@utils/responsive";
import john from "@media/images/john.webp";
import ally from "@media/images/ally.webp";
import alex from "@media/images/alex.webp";
import person from "@media/images/icons/person.svg";
import "./Reviews.scss";

interface ReviewItem {
    comment: string;
    avatar: string;
    name: string;
    role: string;
}

const lorem =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipt earum debitits recusandae voluptate illum expedita corrupti aliquid doloribus delectus?";

const reviewItems: ReviewItem[] = [
    { comment: lorem, avatar: john, name: "John Deep", role: "Customer" },
    { comment: lorem, avatar: ally, name: "Ally Gomez", role: "Customer" },
    { comment: lorem, avatar: alex, name: "Alex Bugg", role: "Customer" },
    { comment: lorem, avatar: person, name: "Person 4", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 5", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 6", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 7", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 8", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 9", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 10", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 11", role: "Lorem" },
    { comment: lorem, avatar: person, name: "Person 12", role: "Lorem" },
];

const Reviews = () => {
    const isMobile = useMediaQuery("width < 768px");
    const carouselRef = useRef<SwiperRef | null>(null);

    useEffect(() => {
        if (isMobile || !carouselRef.current) return;

        const pagination = carouselRef.current.swiper.pagination.el;

        pagination?.classList.remove("swiper-pagination-bullets-dynamic");
        pagination?.style.removeProperty("width");
    }, [isMobile]);

    return (
        <section className="reviews section">
            <div className="container">
                <div className="info">
                    <span className="superscription">Fans love</span>
                    <h2 className="secondary-title">
                        What our fans say about us
                    </h2>
                </div>
                <Swiper
                    className="reviews__carousel"
                    ref={carouselRef}
                    modules={[Autoplay, Pagination, A11y]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        clickableClass: "reviews__pagination",
                        bulletClass: "reviews__bullet",
                        bulletActiveClass: "reviews__bullet_active",
                        dynamicBullets: isMobile,
                    }}
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
                    onBreakpoint={(swiper) => {
                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.update();
                    }}
                >
                    {reviewItems.map((item) => {
                        const { comment, avatar, name, role } = item;

                        return (
                            <SwiperSlide className="reviews__item" key={name}>
                                <p className="reviews__comment text">
                                    {comment}
                                </p>
                                <div className="reviews__profile">
                                    <div className="reviews__avatar-wrapper">
                                        <img
                                            loading="lazy"
                                            className="reviews__avatar"
                                            src={avatar}
                                            alt=""
                                        />
                                    </div>
                                    <div className="reviews__author">
                                        <h3 className="reviews__author-name">
                                            {name}
                                        </h3>
                                        <span className="reviews__author-role text">
                                            {role}
                                        </span>
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
