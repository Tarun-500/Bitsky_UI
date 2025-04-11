import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownGif from '../assets/images/down.gif'
export default function WelcomeSlider() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        swipe: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const scrollToNext = () => {
        const el = document.getElementById("next-section");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                    </div>
                ))}
            </Slider>

            <button className="down" onClick={scrollToNext} style={{ cursor: "pointer" }}>
                <img src={DownGif} alt="down gif" />
            </button>
        </div>
    );
}
