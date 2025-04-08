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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                <div>
                    <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                </div>
                <div>
                    <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                </div>
                <div>
                    <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                </div>
                <div>
                    <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                </div>
                <div>
                    <h2 className="head-3">Welcome to <span> Bitsky </span></h2>
                </div>
            </Slider>

            <div className="down">
                <img src={DownGif} alt="down gif" />
            </div>
        </div>
    );
}
