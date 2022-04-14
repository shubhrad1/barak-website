import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideStyle from "./slider.module.css";
import Slider from "react-slick";

import leftAr from "./leftA.svg";
import rightAr from "./rightA.svg";

const img1 =
    "https://images.unsplash.com/photo-1542137722061-efd1cbdf156c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const img2 =
    "https://images.unsplash.com/photo-1542500186-6edb30855637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const img3 =
    "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const img4 =
    "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const img5 =
    "https://images.unsplash.com/photo-1649452815098-687edf2fd7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const images = [img1, img2, img3, img4, img2, img1, img3];
const names = [
    "Warden",
    "Caretaker",
    "Secy",
    "Sports Sec",
    "Caretaker",
    "Caretaker",
    "Caretaker",
    "Caretaker",
    "Caretaker",
];

export default function Hmc() {
    function SampleNextArrow({ onClick }) {
        return (
            <div className={slideStyle.arrowRight} onClick={onClick}>
                <img src={rightAr} alt="" />
            </div>
        );
    }

    function SamplePrevArrow({ onClick }) {
        return (
            <div className={slideStyle.arrowLeft} onClick={onClick}>
                <img src={leftAr} alt="" />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div>
            <h1 className={slideStyle.title}>HMC Members</h1>;
            <Slider {...settings} className={slideStyle.content}>
                {images.map((img, index) => (
                    <div className={slideStyle.slide} key={img}>
                        <img src={img} alt="" />
                        {names[index]}
                    </div>
                ))}{" "}
            </Slider>
        </div>
    );
}
