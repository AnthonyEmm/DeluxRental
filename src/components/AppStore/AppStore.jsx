import React from "react";
import BannerBg from "../../assets/banner-bg.png";
import AppleStore from "../../assets/app_store.png";
import PlayStore from "../../assets/Google_P.png";

const AppStore = () => {
  const bannerImage = {
    backgroundImage: `url(${BannerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="container pb-14">
      <div
        className="text-black py-10 sm:min-h-[400px]
        sm:grid sm:place-items-center rounded-xl"
        style={bannerImage}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-in"
              className="text-2xl text-center sm:text-4xl font-semibold
            font-serif"
            >
              Get the App for the Best Experience
            </h1>
            <p
              data-aos="fade-in"
              className="text-center sm:px-20 font-serif font-semibold"
            >
              Enhance your journey with our user-friendly app
            </p>
            <div
              data-aos="fade-down"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="https://www.apple.com/app-store/" target="_blank">
                <img
                  src={AppleStore}
                  alt="App-store logo"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="https://play.google.com/store/" target="_blank">
                <img
                  src={PlayStore}
                  alt="App-store logo"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
