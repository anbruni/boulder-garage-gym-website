import "./style/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OpeningHours from "./OpeningHours";
import Location from "./Location";
import LatNews from "./LatNews";
import Courses from "./Courses";

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
              <Route
                path="/dovesiamo"
                element={<Location />}
                component={Location}
              />
              <Route path="/news" element={<LatNews />} component={LatNews} />
              <Route path="/corsi" element={<Courses />} component={Courses} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

const cardItems = [
  {
    title: "300+ m2",
    text: "Superficie arrampicabile",
  },
  {
    title: "Corsi",
    text: "Bambini e adulti",
  },
  {
    title: "Kilterboard",
    text: "Impostabile tramite app",
  },
  {
    title: "Area Boulder",
    text: "Con blocchi di tutte le difficoltà",
  },
  {
    title: "Area Circuiti",
    text: "Dal 4A all'8A",
  },
  {
    title: "Muro Didattico",
    text: "Per i primi passi",
  },
  {
    title: "Zona riscaldamento",
    text: "Con diversi attrezzi fitness",
  },
  {
    title: "Zona allenamento",
    text: "Ampio pan gullich e travi",
  },
];

const Home = () => {
  return (
    <section
      id="lapalestra"
      className="md:py-8 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] border-section--orange lg:pb-16"
    >
      <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold text-center flex justify-center content-center items-center py-6">
        <span className="title--line"></span>
        <span className="text-xl md:text-2xl lg:text-3xl title-text">
          Boulder Garage <br /> Palestra di arrampicata
        </span>
        <span className="title--line"></span>
      </h1>
      <div className="animate-slidein opacity-0 [--slidein-delay:1100ms] flex flex-col-reverse lg:grid grid-cols-[40%_60%]">
        <div className="grid grid-cols-2 justify-items-stretch justify-between px-3 mx-auto lg:pl-10 h-fit w-fit gap-2 lg:gap-5 mb-10 lg:mb-0">
          {cardItems.map((card, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center border border-2 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 p-0.5 shadow-xl">
                <div className="relative bg-gym-gray block p-3 rounded-lg max-w-sm mx-auto w-full h-full">
                  <div className="my-4">
                    <h2 className="text-gym-orange text-2xl font-bold">
                      {card.title}
                    </h2>
                    <p className="text-gray-300 py-1">{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="animate-slidein opacity-0 [--slidein-delay:1200ms] create px-8 md:px-10 lg:px-10">
            <b>Boulder Garage</b> è una palestra di <b>arrampicata sportiva</b>{" "}
            affiliata F.A.S.I e A.S.I. <br />
            Nasce nel 2024 a <b>Cumiana</b> in provincia di <b>Torino</b> e, più
            precisamente, a metà strada tra il capoluogo piemontese e il comune
            di <b>Pinerolo</b>. La palestra, situata all’interno dell’ex
            bocciofila cittadina, si inserisce nel contesto già avviato del
            Circolo Sportivo Menna, andandone ad arricchire la già ampia
            offerta. L’ampio locale, completamente rinnovato, offre più di 300
            metri quadri di superficie arrampicabile così suddivisi: ampia area
            boulder, area circuiti, Kilterboard, muro didattico e Pan Gullich.
            Completano il tutto una zona dedicata a riscaldamento e
            potenziamento, spalti e bar al piano superiore.
          </p>
          <p className="animate-slidein opacity-0 [--slidein-delay:1400ms] px-8 md:px-10 lg:px-10 mt-10">
            Crediamo fortemente nel valore formativo e didattico del
            meraviglioso sport dell’arrampicata sportiva e abbiamo voluto
            cogliere l’occasione di portarlo anche fuori dai contesti
            maggiormente urbanizzati, per creare un ambiente di sana
            aggregazione che possa diventare un punto di riferimento per la
            comunità Cumianese e per la comunità arrampicatoria in generale.
          </p>
          <p className="animate-slidein opacity-0 [--slidein-delay:1400ms] px-8 md:px-10 lg:px-10 mt-10 mb-10 lg:mb-16">
            Il team del Boulder Garage mette impegno e dedizione in questo
            audace progetto con l’obiettivo di soddisfare le esigenze di tutti i
            climbers, dai neofiti dell’arrampicata ai climbers più esigenti
            attraverso rinnovo periodico della tracciatura, corsi didattici per{" "}
            <b>bambini e adulti</b>, eventi sportivi agonistici e non,
            promozione dello sport all’interno del territorio e molto altro
            ancora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
