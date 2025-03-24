// Courses.js
import React, { useEffect, useRef } from "react";
import "./style/Courses.css";

const Courses = () => {
    const coursesRef = useRef(null);

    useEffect(() => {
        coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    function infoClick(event) {
        console.log("Clickato sul bottone:", event, event.target)
    }

    return (
        <section
            id="corsi"
            className="min-h-dvh md:py-8 bg-white border-section--orange bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            ref={coursesRef}
        >
            <h1 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold md:mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl title-text">
                <span className="title--line"></span>
                <span className="text-xl md:text-2xl lg:text-3xl title-text">Corsi</span>
                <span className="title--line"></span>
            </h1>
            <div className="flex flex-col items-start mx-4 md:mx-auto md:w-3/5 pb-8 animate-slidein opacity-0 [--slidein-delay:1200ms]">
                <h2 className="text-l md:text-xl font-bold mb-4">I NOSTRI CORSI</h2>
                {/* Tabella verticale per dispositivi mobili */}
                <div className="block w-full overflow-x-auto h-auto rounded-2xl shadow-xl justify-center items-center">
                    <table className="custom-width min-w-full bg-white rounded-2xl shadow-xl">
                        <thead className="bg-gym-gray text-white rounded-t-2xl">
                            <tr>
                                <th className="sticky left-0 rounded-tl-2xl sm:w-2.5 md:w-1/5"></th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center">Lunedì</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center">Martedì</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center">Mercoledì</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center">Giovedì</th>
                                <th className="px-2 py-3 text-left text-lg font-medium rounded-tr-2xl border text-center">Venerdì</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">4-6 anni</span> <br></br>(1 lezione/sett.) 45'</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">17:00 - 18:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">16:00 - 17:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">17:00 - 18:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">7-9 anni</span><br></br> (1 lezione/sett.) 1h</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">16:00 - 17:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">18:00 - 19:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">18:00 - 19:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">10-13 anni</span><br></br> (2 lezioni/sett.) 1h</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">17:00 - 18:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">17:00 - 18:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">17:00 - 18:00</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">14-18 anni</span><br></br> (2 lezioni/sett.) 1h</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">18:00 - 19:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">18:00 - 19:00</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">18:00 - 19:00</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange rounded-bl-2xl sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">Adulti</span><br></br> (1-2 lezioni/sett.) 1h30'</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">20:00 - 21:30</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">20:00 - 21:30</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">20:00 - 21:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className="w-full my-6 md:my-12 border-t-4"></span>
                {/* Tabella verticale per dispositivi mobili */}
                <div className="block w-full overflow-x-auto h-auto rounded-2xl shadow-xl justify-center items-center">
                    <table className="custom-width min-w-full bg-white rounded-2xl shadow-xl">
                        <thead className="bg-gym-gray text-white rounded-t-2xl">
                            <tr>
                                <th className="sticky left-0 rounded-tl-2xl sm:w-2.5 md:w-1/5"></th>
                                <th className="px-2 py-3 text-left text-m font-medium border text-center">1 LEZIONE/SETT.<br></br>-<br></br>1 MESE</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center">2 LEZIONI/SETT.<br></br>-<br></br>1 MESE</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center text-gym-orange">1 LEZIONE/SETT.<br></br>-<br></br>3 MESI</th>
                                <th className="px-2 py-3 text-left text-lg font-medium border text-center text-gym-orange">2 LEZIONI/SETT.<br></br>-<br></br>3 MESI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">4-9 ANNI</span></td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 45</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 125</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">10-18 ANNI</span></td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 60</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">-</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 160</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">ADULTI</span></td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 55</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 80</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 135</td>
                                <td className="px-2 py-4 text-gray-700 border text-center">€ 165</td>
                            </tr>
                            <tr className="border-t">
                                <td className="sticky left-0 px-6 py-4 text-gray-900 border bg-gym-orange sm:w-2.5 md:w-1/5 md:text-xl"><span className="font-bold">ADULTI 3 LEZ. (introduzione all'arrampicata)</span></td>
                                <td className="px-2 py-4 text-gray-700 text-center"></td>
                                <td className="px-2 py-4 text-gray-700 text-center text-right">€ 45</td>
                                <td className="px-2 py-4 text-gray-700 text-center"></td>
                                <td className="px-2 py-4 text-gray-700 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className="mt-6 font-bold">ATTENZIONE!</h3>
                <p>*Il tesseramento NON è incluso nei costi di abbonamento ai corsi.</p>
                <p>*Per la partecipazione ai corsi di arrampicata è obbigatorio presentare un <span className="underline underline-offset-1">certificato medico sportivo in corso di validità.</span></p>
                <p>*Scarpette per bambini incluse nel prezzo del corso.</p>
            </div>
        </section>
    );
};

export default Courses;