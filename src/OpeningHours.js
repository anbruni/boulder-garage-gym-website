// OpeningHours.js
import React, { useEffect, useRef } from "react";
import Prices from "./Prices";

const OpeningHours = () => {
  const openingHoursRef = useRef(null);

  useEffect(() => {
    openingHoursRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-dvh">
      <section
        id="orariapertura"
        className="md:py-8 bg-white border-section--orange bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        ref={openingHoursRef}
      >
        <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold md:mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl title-text">
          <span className="title--line"></span>
          <span className="text-xl md:text-2xl lg:text-3xl title-text">Orari di apertura</span>
          <span className="title--line"></span>
        </h1>
        <div className="flex flex-col items-start pb-2 mx-4 md:mx-auto md:w-3/5 animate-slidein opacity-0 [--slidein-delay:1200ms]">
          <h2 className="text-l md:text-xl font-bold mb-4">ORARIO INVERNALE - DAL 5 OTTOBRE</h2>
          {/* Tabella verticale per dispositivi mobili */}
          <div className="block w-full overflow-x-auto h-auto shadow-xl justify-center items-center">
            {/* <div className="overflow-x-auto sm:mx-4"> */}
            <table className="min-w-full bg-white rounded-2xl shadow-xl">
              <thead className="bg-gym-gray text-white rounded-t-2xl">
                <tr>
                  <th className="px-6 py-3 text-left text-xl font-medium rounded-tl-2xl">
                    Giorno
                  </th>
                  <th className="px-6 py-3 text-left text-xl font-medium rounded-tr-2xl">
                    Orari
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Lunedì
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    14:30 - 22:30
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Martedì
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    11:30 - 22:30
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Mercoledì
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    14:30 - 22:30
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Giovedì
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    11:30 - 22:30
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Venerdì
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    14:30 - 22:30
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Sabato
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    13:00 - 19:00
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Domenica
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    13:00 - 19:00
                  </td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}
          </div>
          {/* Giorni di chiusura */}
          <div className="py-6 md:w-3/5 animate-slidein opacity-0 [--slidein-delay:1200ms]">
            <h2 className="text-l font-semibold mb-4">
              Ricorda, siamo chiusi nei seguenti giorni:
            </h2>
            <ul className="list-disc text-l list-inside space-y-2">
              <li>
                <span className="font-medium">1 novembre 2024</span> - Tutti i Santi
              </li>
              <li>
                <span className="font-medium">8 dicembre 2024</span> - Immacolata
                Concezione
              </li>
              <li>
                <span className="font-medium">25 dicembre 2024</span> - Natale
              </li>
              <li>
                <span className="font-medium">26 dicembre 2024</span> - Santo
                Stefano
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Prices></Prices>
    </div>
  );
};

export default OpeningHours;
