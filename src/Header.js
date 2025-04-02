//Header
import React from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import "./style/index.css";
import "./style/Header.css";
import ImageSlider from "./ImageSlider";

const Header = ({ scrollToSection }, isNavbarOpen, toggleNavbar) => {
  const handleClick = (e) => {
    var iconName = document.querySelector("#menu-icon");
    iconName.name === "menu-outline"
      ? (iconName.name = "close-outline")
      : (iconName.name = "menu-outline");

    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("top-[100%]");
    if (navLinks.classList.contains("hidden")) {
      navLinks.classList.remove("hidden");
    } else {
      navLinks.classList.add("hidden");
    }
  };

  const slides = [
    {
      url: `gym-cover-1.webp`,
      // title: "Questa foto e' stata scattata da Andrea",
    },
    {
      url: "gym-cover-2.webp",
      // title: "Questa foto e' stata scattata da Luca",
    },
    {
      url: "gym-cover-3.webp",
      // title: "Questa foto e' stata scattata da Gianmatteo",
    },
    // {
      // url: "gym-cover-4.webp",
    //   title: "Questa foto e' stata scattata da Settembrino",
    // },
    {
      url: "gym-cover-5.webp",
      // title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-6.webp",
      // title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-7.webp",
      // title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-8.webp",
      // title: "Questa foto e' stata scattata da Marco Antonio",
    },
  ];

  return (
    <div className="background-cover">
      <ImageSlider autoSlide={true}>
        {slides.map((s, index) => (
          <LazyLoad key={index} height="400px" offsetVertical={300}>
            <div
              className="w-full h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${s.url})` }}
            >
              {/* <div className="absolute w-full bottom-14 sd:bottom-10 md:bottom-20 lg:bottom-24">
                <div className="flex items-center justify-center bg-transparent overflow-hidden">
                  <p className="p-2 px-5 lg:inline bg-gray-100 z-10 max-w-max w-3/4 text-sm py-2 mt-2 text-center rounded-lg text-lg text-gym-gray opacity-90">{s.title}</p>
                </div>
              </div> */}
            </div>
          </LazyLoad>
        ))}
      </ImageSlider>
      <section className="header-container bg-opacity-30 ">
        <header className="lg:h-dvh grey-boulder lg:py-4 w-full z-1 top-0 start-0 relative lg:bg-transparent">
          <div className="md:sticky px-3.5 lg:px-0 py-3.5 top-0 appearance-none font-semibold flex justify-between items-center lg:items-start md:w-full lg:mx-auto w-full lg:w-[90%] md:grey-boulder">
            <div className="flex flex-col">
              <div className="bg-[url('./gym-logo-orange.webp')] bg-cover header-logo-img max-w-full"></div>
              <span className="hidden lg:inline bg-gray-100 z-10 max-w-full text-sm py-2 mt-2 text-center rounded-xl text-gym-gray opacity-90">
                Palestra di arrampicata
              </span>
            </div>
            <nav className="nav-links lg:static absolute grey-boulder lg:bg-transparent lg:min-h-fit min-h-auto lg:py-0 py-4 pb-8 left-0 lg:flex hidden lg:w-auto w-full flex items-center pl-5 top-100 text-l z-50">
              <ul className="lg:flex w-full lg:text-m lg:flex-row lg:border-2 lg:border-gym-gray flex-col lg:items-center lg:gap-[2vw] gap-4 lg:px-10 py-3 lg:rounded-3xl blurredShadow small-dev-header">
                <li className="">
                  <Link
                    to="/"
                    className="home--text relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("lapalestra")}
                  >
                    LA PALESTRA
                  </Link>
                </li>
                {/* <li className="">
                  <Link
                    to="/chisiamo"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("chisiamo")}
                  >
                    CHI SIAMO
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/dovesiamo"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("dovesiamo")}
                  >
                    DOVE SIAMO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orariapertura"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("orariapertura")}
                  >
                    ORARI | PREZZI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corsi"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("corsi")}
                  >
                    CORSI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("news")}
                  >
                    NEWS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("contatti")}
                  >
                    CONTATTI
                  </Link>
                </li>
              </ul>
            </nav>
            <ion-icon
              class="text-3xl cursor-pointer lg:hidden"
              id="menu-icon"
              name="menu-outline"
              onClick={handleClick}
            ></ion-icon>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
