// OpeningHours.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const OpeningHours = () => {
  const openingHoursRef = useRef(null);

  useEffect(() => {
    openingHoursRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="orariapertura"
      className="py-8 bg-white min-h-dvh border-section--orange bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      ref={openingHoursRef}
    >
      <h2 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl title-text">
        <span className="title--line"></span>
        Orari di apertura
        <span className="title--line"></span>
      </h2>
      <div className="flex flex-col items-center pb-8 sd:mx-3 md:mx-6 lg:mx-8 animate-slidein opacity-0 [--slidein-delay:1200ms]">
        {/* Tabella orizzontale */}
        <div className="hidden sm:block overflow-x-auto w-full rounded-2xl shadow-2xl border-2 border-gray-300">
          <table className="min-w-full rounded-2xl shadow-2xl border-collapse border-gray-300">
            <thead className="bg-gym-gray text-white rounded-t-2xl">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium rounded-tl-l border border-gray-300">
                  Giorno
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  9:00 - 10:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  10:00 - 11:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  11:00 - 12:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  12:00 - 13:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  13:00 - 14:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  14:00 - 15:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  15:00 - 16:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  16:00 - 17:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  17:00 - 18:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium border border-gray-300 text-center">
                  18:00 - 19:00
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium rounded-tr-l border border-gray-300 text-center">
                  19:00 - 20:00
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Lunedì",
                "Martedì",
                "Mercoledì",
                "Giovedì",
                "Venerdì",
                "Sabato",
                "Domenica",
              ].map((day, dayIndex) => (
                <tr key={day} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 sticky left-0 bg-gray-100 z-10">
                    {day}
                  </td>
                  {[...Array(11)].map((_, hourIndex) => {
                    const isOrange =
                      (dayIndex < 5 &&
                        (hourIndex < 4 ||
                          (hourIndex >= 5 && hourIndex < 11))) || // Lunedì - Venerdì: 9-13, 14-21
                      (dayIndex === 5 && hourIndex < 9) || // Sabato: 9-18
                      (dayIndex === 6 && hourIndex >= 1 && hourIndex < 6); // Domenica: 10-15

                    return (
                      <td
                        key={hourIndex}
                        className={`px-4 py-2 text-sm text-center ${isOrange ? "bg-gym-orange" : "bg-gray-100"} border border-gray-300`}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabella verticale per dispositivi mobili */}
        <div className="block sm:hidden overflow-x-auto w-4/5 h-auto shadow-2xl justify-center items-center mx-3.5">
          {/* <div className="overflow-x-auto sm:mx-4"> */}
          <table className="min-w-full bg-white rounded-2xl shadow-2xl">
            <thead className="bg-gym-gray text-white rounded-t-2xl">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium rounded-tl-2xl">
                  Giorno
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium rounded-tr-2xl">
                  Orari
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Lunedì - Venerdì
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  9:00 - 13:00 e 14:00 - 21:00
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Sabato
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  9:00 - 18:00
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Domenica
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  10:00 - 15:00
                </td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
      {/* Giorni di chiusura */}
      <div className="p-6 mx-3.5 animate-slidein opacity-0 [--slidein-delay:1200ms]">
        <h2 className="text-lg font-semibold mb-4">
          Ricorda, siamo chiusi nei seguenti giorni:
        </h2>
        <ul className="list-disc list-inside space-y-2">
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
    </section>
  );
};

export default OpeningHours;
