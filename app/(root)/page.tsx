"use client";

import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const fadeImages = [
  {
    url: "/assets/images/SAT.jpg",
    caption: "First Slide",
  },
  {
    url: "https://drive.google.com/file/d/19N-QNCg9g6-ggHH4D9vtmv32BSJPUEGv/view?usp=sharing",
    caption: "Second Slide",
  },
  {
    url: "https://drive.google.com/file/d/13sMJl8i2wpIkSmP3ZmQaf9-JXm3AXDYZ/view?usp=sharing",
    caption: "Third Slide",
  },
  {
    url: "https://drive.google.com/file/d/1Z0vAUZ-FB-OQz6TkJe2hQOO_aDDGKYYA/view?usp=sharing",
    caption: "Second Slide",
  },
  {
    url: "https://drive.google.com/file/d/1bGtHvvaF0WBr-hyHeKxDjI58yUPRcVSX/view?usp=sharing",
    caption: "Third Slide",
  },
];

const Home = () => {
  return (
    <>
      <section className="absolute w-11/12 p-2 md:flex flex-row items-center space-y-5 gap-10 md:pl-80">
        <div>
          <div className="hero-content">
            <p className="section-subtitle h2">
              Welcome To SOS Digital Library
            </p>

            <h1 className="hero-title">
              Read More And Make Success The Result Of Perfection.
            </h1>

            <p className="section-text white">
              In this website, you will find not only text book, but a lot more;
              like Exam sheets, Books for International Standardized
              Tests(TOEFL, SAT, IELTS), Art books, Coding Books ... a lot more!{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full px-5">
            <SimpleImageSlider
              width={431}
              height={596}
              images={fadeImages}
              showBullets={false}
              showNavs={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
