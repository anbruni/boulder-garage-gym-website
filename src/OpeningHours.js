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
          <h2 className="text-l md:text-xl font-bold mb-4">ORARIO PRIMAVERILE</h2>ß
          <div className="block w-full overflow-x-auto h-auto shadow-xl justify-center items-center">
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
                    CHIUSO (salvo maltempo)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-l font-medium text-gray-900">
                    Domenica
                  </td>
                  <td className="px-6 py-4 text-l text-gray-700">
                    CHIUSO (salvo maltempo)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Prices></Prices>
    </div>
  );
};

export default OpeningHours;
