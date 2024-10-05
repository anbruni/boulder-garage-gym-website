//Header
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./Header.css";
import ImageSlider from "./ImageSlider";

const Header = ({ scrollToSection }, isNavbarOpen, toggleNavbar) => {
  const handleClick = (e) => {
    var iconName = document.querySelector("#menu-icon");
    iconName.name === "menu-outline"
      ? (iconName.name = "close-outline")
      : (iconName.name = "menu-outline");

    const navLinks = document.querySelector(".nav-links");
    console.log(navLinks);
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
      title: "Questa foto e' stata scattata da Andrea",
    },
    {
      url: "gym-cover-2.webp",
      title: "Questa foto e' stata scattata da Luca",
    },
    {
      url: "gym-cover-3.webp",
      title: "Questa foto e' stata scattata da Gianmatteo",
    },
    // {
    //   url: "gym-cover-4.webp",
    //   title: "Questa foto e' stata scattata da Settembrino",
    // },
    {
      url: "gym-cover-5.webp",
      title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-6.webp",
      title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-7.webp",
      title: "Questa foto e' stata scattata da Marco Antonio",
    },
    {
      url: "gym-cover-8.webp",
      title: "Questa foto e' stata scattata da Marco Antonio",
    },
  ];

  return (
    <div className="background-cover">
      <ImageSlider autoSlide={true}>
        {slides.map((s, index) => (
          <div
            key={index}
            className="w-full h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(${s.url})` }}
          >
            <div className="absolute w-full bottom-14 sd:bottom-10 md:bottom-20 lg:bottom-24">
              <div className="flex items-center justify-center bg-transparent overflow-hidden">
                <p className="p-2 px-5 lg:inline bg-gray-100 z-10 max-w-max w-3/4 text-sm py-2 mt-2 text-center rounded-lg text-lg text-gym-gray opacity-90">{s.title}</p>
              </div>
            </div>
          </div>
        ))}
      </ImageSlider>
      <section className="header-container bg-opacity-30 ">
        <header className="md:h-dvh grey-boulder md:py-0 lg:py-4 w-full z-20 top-0 start-0 relative md:bg-transparent">
          <div className="md:sticky px-3.5 sm:px-0 md:px-0 lg:px-0 py-3.5 top-0 appearance-none font-semibold flex justify-between items-center md:items-start mx-auto sm:w-[92%] md:w-[92%] lg:w-[90%] sd:grey-boulder">
            <div className="flex flex-col">
              <div className="bg-[url('./gym-logo-orange.png')] bg-cover header-logo-img max-w-full"></div>
              <span className="hidden lg:inline bg-gray-100 z-10 max-w-full text-sm py-2 mt-2 text-center rounded-xl text-gym-gray opacity-90">
                Palestra di arrampicata
              </span>
            </div>
            <nav className="nav-links md:static absolute sm:grey-boulder md:bg-transparent lg:bg-transparent md:min-h-fit min-h-auto md:py-0 py-4 pb-8 left-0 md:flex hidden md:w-auto w-full flex items-center pl-5 top-100 md:bg-transparent grey-boulder text-l">
              <ul className="md:flex w-full md:text-lg md:flex-row md:border-2 md:border-gym-gray flex-col md:items-center md:gap-[2vw] gap-6 md:px-10 py-3 md:rounded-3xl blurredShadow small-dev-header">
                <li className="">
                  <Link
                    to="/"
                    className="home--text relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("lapalestra")}
                  >
                    La palestra
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/chisiamo"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("chisiamo")}
                  >
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dovesiamo"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("dovesiamo")}
                  >
                    Dove siamo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orariapertura"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("orariapertura")}
                  >
                    Orari
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("news")}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    className="text-white relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    onClick={() => scrollToSection("contatti")}
                  >
                    Contatti
                  </Link>
                </li>
              </ul>
            </nav>
            <ion-icon
              class="text-3xl cursor-pointer md:hidden"
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
