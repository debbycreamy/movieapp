import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css";

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="landing-page-bg h-screen flex flex-col justify-center">
      <div className="text-center px-6 mb-10">
        <h1 className="text-6xl font-extrabold dark:text-white">
          🎬 Movie Explorer
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Discover movies, watch trailers, save favorites, explore the world of
          cinema.
        </p>

        <button
          className="inline-block mt-8 px-8 py-3 bg-blue-600  rounded-lg 
          hover:bg-blue-700 transition text-lg shadow-lg"
          onClick={() => (window.location.href = "/home")}
        >
          Get Started →
        </button>
      </div>

      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
              className="w-full h-80 object-cover"
              alt="Cinema 1"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
              className="w-full h-80 object-cover"
              alt="Cinema 2"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
              className="w-full h-80 object-cover"
              alt="Cinema 3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
