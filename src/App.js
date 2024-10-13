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
                path="/chisiamo"
                element={<AboutUs />}
                component={AboutUs}
              />
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
      className="md:py-8 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] min-h-dvh border-section--orange"
    >
      <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold text-center flex justify-center content-center items-center py-6">
        <span className="title--line"></span>
        <span className="text-xl md:text-2xl lg:text-3xl title-text">
          Boulder Garage <br /> Palestra di arrampicata
        </span>
        <span className="title--line"></span>
      </h1>
      <h2 className="animate-slidein opacity-0 [--slidein-delay:1200ms] pb-5 px-8 md:px-16 lg:px-24">
        Dove abbiamo iniziato
      </h2>
      <div className=" animate-slidein opacity-0 [--slidein-delay:1200ms] create px-8 md:px-16 lg:px-24">
        Ut nostrud veniam veniam elit. Proident irure ullamco et nostrud. Ad
        veniam occaecat ipsum qui nulla et esse. Ad consequat magna proident
        magna cillum reprehenderit nulla deserunt cillum voluptate laborum
        pariatur. Deserunt deserunt dolore pariatur proident proident cillum
        duis in sint ad irure voluptate. Velit minim exercitation exercitation
        amet nulla elit nostrud eiusmod non id. Fugiat ea consectetur cillum
        minim sunt do ea velit quis officia ipsum ad. Aliqua labore irure cillum
        non ullamco labore qui consequat. Labore non velit eu excepteur officia
        tempor enim ex esse velit aliquip quis excepteur. Labore consectetur
        tempor elit pariatur amet exercitation ad veniam sit voluptate Lorem
        cupidatat quis.
      </div>
    </section>
  );
};

export default App;
