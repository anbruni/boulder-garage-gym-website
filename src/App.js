import "./style/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OpeningHours from "./OpeningHours";
import AboutUs from "./AboutUs";
import Location from "./Location";
import LatNews from "./LatNews";
import Courses from "./Courses";
import LazyLoad from "react-lazy-load";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(section, "SECTION");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("App component rendering");
  return (
    <>
      <Router>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Header scrollToSection={scrollToSection} />
          <main>
            <Home></Home>
            <Routes>
              <Route
                path="/orariapertura"
                element={<OpeningHours />}
                component={OpeningHours}
              />
              {/* <Route
                path="/chisiamo"
                element={<AboutUs />}
                component={AboutUs}
              /> */}
              <Route
                path="/dovesiamo"
                element={<Location />}
                component={Location}
              />
              <Route
                path="/news"
                element={<LatNews />}
                component={LatNews}
              />
              <Route
                path="/corsi"
                element={<Courses />}
                component={Courses}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

const Home = () => {
  return (
    <section
      id="lapalestra"
      className="md:py-8 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] border-section--orange"
    >
      <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold text-center flex justify-center content-center items-center py-6">
        <span className="title--line"></span>
        <span className="text-xl md:text-2xl lg:text-3xl title-text">
          Boulder Garage <br /> Palestra di arrampicata
        </span>
        <span className="title--line"></span>
      </h1>
      {/* <h2 className="animate-slidein opacity-0 [--slidein-delay:1200ms] pb-5 px-8 md:px-16 lg:px-24">
        Dove abbiamo iniziato
      </h2> */}
      <div className="animate-slidein opacity-0 [--slidein-delay:1100ms] flex flex-col-reverse lg:grid grid-cols-[1fr_2fr]">
      {/* <LazyLoad key="12" height="400px" offsetVertical={300}> */}
        {/* <img className="hidden lg:block lg:bg-center lg:bg-cover w-full ml-8" alt="Il muro principale della nostra palestra, con prese" style={{ backgroundImage: `url(gym-cover-3.webp)`, maxWidth: `30%`}}></img> */}
        {/* </LazyLoad> */}
        <div className="grid grid-cols-2 justify-items-stretch justify-between px-3 mx-auto lg:pl-10 h-fit w-fit gap-2 lg:gap-5 mb-10 lg:mb-0">
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">300+ m2</p>
              <p className="font-bold text-l text-gym-grey">Superficie</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">Corsi</p>
              <p className="font-bold text-l text-gym-grey">Bambini e adulti</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">Kilterboard</p>
              <p className="font-bold text-l text-gym-grey">Personalizzabile</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">Area Boulder</p>
              <p className="font-bold text-l text-gym-grey">Con diversi livelli</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">Area Circuiti</p>
              <p className="font-bold text-l text-gym-grey">Attrezzata</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-border-gym-grey border-2 border-dashed rounded-xl">
              <p className="font-poppins text-xl font-bold text-gym-orange whitespace-nowrap">Muro Didattico</p>
              <p className="font-bold text-l text-gym-grey">Per i primi passi</p>
            </div>
        </div>
        <div>
        <p className="animate-slidein opacity-0 [--slidein-delay:1200ms] create px-8 md:px-10 lg:px-10">
        <b>Boulder Garage</b> è una palestra di <b>arrampicata sportiva</b> affiliata F.A.S.I e A.S.I. <br /> 
        Nasce nel 2024 a <b>Cumiana</b> in provincia di <b>Torino</b> e, più precisamente, a metà strada tra il capoluogo piemontese e il comune di <b>Pinerolo</b>.
        La palestra, situata all’interno dell’ex bocciofila cittadina, si inserisce nel contesto già avviato del Circolo Sportivo Menna, andandone ad arricchire la già ampia offerta.
        L’ampio locale, completamente rinnovato, offre più di 300 metri quadri di superficie arrampicabile così suddivisi: ampia area boulder, area circuiti, Kilterboard, muro didattico e Pan Gullich. 
        Completano il tutto una zona dedicata a riscaldamento e potenziamento, spalti e bar al piano superiore.
        </p>
        <p className="animate-slidein opacity-0 [--slidein-delay:1400ms] px-8 md:px-10 lg:px-10 mt-10">
        Crediamo fortemente nel valore formativo e didattico del meraviglioso sport dell’arrampicata sportiva e abbiamo voluto cogliere l’occasione di portarlo anche fuori dai contesti maggiormente urbanizzati, per creare un ambiente di sana aggregazione che possa diventare un punto di riferimento per la comunità Cumianese e per la comunità arrampicatoria in generale.
        </p>
        <p className="animate-slidein opacity-0 [--slidein-delay:1400ms] px-8 md:px-10 lg:px-10 mt-10 mb-10 lg:mb-16">
        Il team del Boulder Garage mette impegno e dedizione in questo audace progetto con l’obiettivo di soddisfare le esigenze di tutti i climbers, dai neofiti dell’arrampicata ai climbers più esigenti attraverso rinnovo periodico della tracciatura, corsi didattici per <b>bambini e adulti</b>, eventi sportivi agonistici e non, promozione dello sport all’interno del territorio e molto altro ancora.
        </p>
        </div>
      </div>
    </section>
  );
};

export default App;
