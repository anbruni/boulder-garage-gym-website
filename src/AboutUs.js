// AboutUs.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CardPersona from "./components/Card";

const AboutUs = () => {
  const aboutUsRef = useRef(null);

  const personas = {
    persona1: {
      photo: "gym-cover-1.png",
      role: "Allenatore",
      name: "Stefano Bruni",
      about: `Occaecat laboris occaecat est Lorem eu anim minim laboris et. Sunt eu dolor enim excepteur amet ad nulla qui est dolore aliquip est veniam. Amet ea officia consectetur nostrud aliquip excepteur dolore sunt officia et ipsum aute.
              Elit adipisicing sint nisi excepteur est labore ea tempor et cupidatat esse enim.`,
    },
    persona2: {
      photo: "gym-cover-2.png",
      role: "Capo Allenatore",
      name: "Andrea Bruni",
      about: `Occaecat laboris occaecat est Lorem eu anim minim laboris et. Sunt eu dolor enim excepteur amet ad nulla qui est dolore aliquip est veniam. Amet ea officia consectetur nostrud aliquip excepteur dolore sunt officia et ipsum aute.
              Elit adipisicing sint nisi excepteur est labore ea tempor et cupidatat esse enim.`,
    },
    persona3: {
      photo: "gym-cover-3.png",
      role: "Allenatore",
      name: "Gianni Bruni",
      about: `Occaecat laboris occaecat est Lorem eu anim minim laboris et. Sunt eu dolor enim excepteur amet ad nulla qui est dolore aliquip est veniam. Amet ea officia consectetur nostrud aliquip excepteur dolore sunt officia et ipsum aute.
              Elit adipisicing sint nisi excepteur est labore ea tempor et cupidatat esse enim.`,
    },
  };

  useEffect(() => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="chisiamo"
      className="py-8 min-h-dvh border-section--orange bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      ref={aboutUsRef}
    >
      <div className="container mx-auto">
        <h2 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl title-text">
          <span className="title--line"></span>
          Chi siamo
          <span className="title--line"></span>
        </h2>
        <p className="animate-slidein opacity-0 [--slidein-delay:1100ms] px-10 mb-10">
          Occaecat excepteur non fugiat aute pariatur pariatur cillum. Consequat
          irure esse consequat non enim. In esse esse officia qui cupidatat
          exercitation. Velit duis id velit pariatur pariatur ea. Aute amet qui
          exercitation consectetur anim minim. Eu sunt non excepteur nostrud
          enim eiusmod magna. Adipisicing duis nostrud sunt nostrud culpa
          consequat magna.
        </p>
        {Object.values(personas).map((persona, index) => (
          <CardPersona key={index} persona={persona} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
