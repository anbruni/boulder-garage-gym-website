// Prices.js
import React, { useEffect, useRef } from "react";

const Prices = () => {

    return (
        <section
            id="prices"
            className="md:pt-8 pb-20 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        >
            <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold md:mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl title-text">
                <span className="title--line"></span>
                <span className="text-xl md:text-2xl lg:text-3xl title-text">Prezzi</span>
                <span className="title--line"></span>
            </h1>
            <div className="flex flex-col items-start pb-2 mx-4 md:mx-auto md:w-4/5 animate-slidein opacity-0 [--slidein-delay:1200ms]">
                <h2 className="text-l md:text-xl font-bold mb-4">INGRESSO SINGOLO</h2>
                <div className="block w-full overflow-x-auto h-auto shadow-xl justify-center items-center">
                    <table className="min-w-full bg-white rounded-2xl shadow-xl">
                        <thead className="bg-gym-gray text-white rounded-t-2xl">
                            <tr>
                                <th className="px-6 py-3 text-left text-xl font-medium rounded-tl-2xl">
                                </th>
                                <th className="px-6 py-3 text-left text-xl font-medium rounded-tr-2xl text-center">
                                    Prezzo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Intero
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 10
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Ridotto (Studenti)
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 8
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Ridotto (Under 16 & over 65)
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 5
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className="mt-10 text-l md:text-xl font-bold mb-4">TESSERA 10 INGRESSI</h2>
                <div className="block w-full overflow-x-auto h-auto shadow-xl justify-center items-center">
                    <table className="min-w-full bg-white rounded-2xl shadow-xl">
                        <thead className="bg-gym-gray text-white rounded-t-2xl">
                            <tr>
                                <th className="px-6 py-3 text-left text-xl font-medium rounded-tl-2xl">
                                </th>
                                <th className="px-6 py-3 text-left text-xl font-medium rounded-tr-2xl text-center">
                                    Prezzo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Intero
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 90
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Ridotto (Studenti)
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 70
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-6 py-4 text-l font-medium text-gray-900">
                                    Ridotto (Under 16 & over 65)
                                </td>
                                <td className="px-6 py-4 text-l text-gray-700 text-center">
                                    € 45
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>ß
            </div>
        </section>
    );
};

export default Prices;