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
                <h2 className="mt-10 text-l md:text-xl font-bold mb-4">CARD 10 INGRESSI</h2>
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
                </div>
                <h2 className="mt-10 md:text-xl font-bold mb-4">TARIFFE ABBONAMENTI</h2>
                <div className="block w-full overflow-x-auto h-auto shadow-xl justify-center items-center">
                    <table className="min-w-full bg-white rounded-2xl shadow-xl overflow-x-auto">
                        <thead className="bg-gym-gray text-white sticky">
                            <tr>
                                <th className="px-1 py-3 text-left font-medium rounded-tl-2xl">
                                    {/* Header cell for the first column */}
                                </th>
                                <th className="px-1 py-3 text-left text-m md:text-xl font-medium text-center">
                                    Mensile
                                </th>
                                <th className="px-1 py-3 text-left text-m md:text-xl font-medium text-center">
                                    3 Mesi
                                </th>
                                <th className="px-1 py-3 text-left text-m md:text-xl font-medium text-center">
                                    6 Mesi
                                </th>
                                <th className="px-1 py-3 text-left text-m md:text-xl font-medium rounded-tr-2xl text-center pr-2">
                                    12 Mesi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Intero', prices: ['€ 65', '€ 170', '€ 290', '€ 450'] },
                                { name: 'Ridotto (Studenti)', prices: ['€ 55', '€ 145', '€ 240', '€ 360'] },
                                { name: 'Ridotto (Under 16 & over 65)', prices: ['€ 40', '€ 125', '€ 200', '€ 320'] },
                            ].map((row, index) => (
                                <tr key={index} className="border-t">
                                    <td className="pl-2 md:pl-6 pr-1 py-4 text-sm md:text-base font-baseedium text-gray-900">
                                        {row.name}
                                    </td>
                                    {row.prices.map((price, i) => (
                                        <td key={i} className="px-1 py-4 text-sm md:text-base text-gray-700 text-center">
                                            {price}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Prices;