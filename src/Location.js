// Location.js
import React, { useEffect, useRef } from "react";
import LocationMap from "./components/Map";

const Location = () => {
  const locationRef = useRef(null);

  useEffect(() => {
    locationRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="dovesiamo"
      className="py-8 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] min-h-dvh border-section--orange"
      ref={locationRef}
    >
      <div className="container mx-auto">
        <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold text-center flex justify-center content-center items-center py-6">
          <span className="title--line"></span>
          <span className="text-xl md:text-2xl lg:text-3xl title-text">
            Dove Siamo
          </span>
          <span className="title--line"></span>
        </h1>
        <div className="animate-slidein opacity-0 [--slidein-delay:1100ms]">
          <LocationMap></LocationMap>
          <div className="px-8 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Come Raggiungerci
            </h2>

            <div className="mb-6">
              <p className="text-gray-700">
                <strong>Indirizzo:</strong>
                <br />
                Via Giusto Lanteri,
                <br />
                Cumiana (TO),
                <br />
                10040, Italia
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                In Auto
              </h3>
              <p className="text-gray-700">
                Puoi raggiungerci comodamente in auto seguendo queste
                indicazioni:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  <strong>Da Torino:</strong> Prendi la SP6 in direzione
                  Pinerolo e segui le indicazioni per Cumiana. Una volta
                  arrivato a Cumiana, segui le indicazioni per Strada Gabriella.
                </li>
                <li>
                  <strong>Da Pinerolo:</strong> Prendi la SP6 verso Torino e
                  segui le indicazioni per Cumiana. Segui poi le indicazioni per
                  Strada Gabriella.
                </li>
              </ul>
              <p className="text-gray-700 mt-2">
                Parcheggio disponibile in loco.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                In Autobus
              </h3>
              <p className="text-gray-700">
                Se preferisci utilizzare i mezzi pubblici, puoi prendere
                l'autobus:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  <strong>Da Torino:</strong> Prendi l'autobus della linea 282
                  in direzione Pinerolo e scendi alla fermata Cumiana. Da lì,
                  una breve passeggiata ti porterà in Strada Gabriella.
                </li>
                <li>
                  <strong>Da Pinerolo:</strong> Prendi l'autobus della linea 282
                  in direzione Torino e scendi alla fermata Cumiana. Cammina per
                  circa 10 minuti fino a Strada Gabriella.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                In Treno
              </h3>
              <p className="text-gray-700">Se viaggi in treno:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  <strong>Dalla Stazione di Torino Porta Nuova:</strong> Prendi
                  un treno regionale per Pinerolo. Una volta arrivato a
                  Pinerolo, puoi prendere l'autobus della linea 282 verso Torino
                  e scendere alla fermata Cumiana.
                </li>
                <li>
                  <strong>Dalla Stazione di Pinerolo:</strong> Prendi un treno
                  regionale verso Torino Porta Nuova, scendi alla fermata
                  Cumiana e continua in autobus o a piedi verso Strada
                  Gabriella.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
