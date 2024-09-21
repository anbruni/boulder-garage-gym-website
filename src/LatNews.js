import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import { getNews } from "./components/News";

const LatNews = () => {
    const latNews = useRef(null);
    const currYear = new Date().getFullYear();
    console.log(currYear);

    useEffect(() => {
        latNews.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    // let orderedNews = getNews[currYear].sort((a, b) => b.month - a.month)
    //     .map(monthOrd => {
    //         monthOrd.dayNews.sort((a, b) => b.day - a.day);
    //         return {
    //             ...monthOrd
    //         }
    //     })
    // console.log(orderedNews, "orderedNews222")

    const sortedNews = {
        2024: getNews[2024]
            // Sort by month (ascending order)
            .sort((a, b) => b.month - a.month)
            .map(monthObject => {
                // For each month, sort the dayNews array by day in descending order
                const sortedDayNews = monthObject.dayNews.sort((a, b) => b.day - a.day);

                // Return the updated month object with sorted dayNews
                return {
                    ...monthObject,
                    dayNews: sortedDayNews
                };
            })
    };

    console.log(sortedNews);
    const dayNews = sortedNews[currYear].map(news => {
        return news.dayNews
    })

    console.log(dayNews, "dayNews")
    return (
        <section
            id="news"
            className="py-8 min-h-dvh border-section--orange bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            ref={latNews}
        >
            <div className="container mx-auto">
                <h2 className="animate-slidein opacity-0 [--slidein-delay:800ms] font-bold mb-2 text-center flex justify-center content-center items-center py-6 pb-4 text-2xl sm:text-4xl md:text-4xl title-text">
                    <span className="title--line"></span>
                    News
                    <span className="title--line"></span>
                </h2>
                <p className="animate-slidein opacity-0 [--slidein-delay:1000ms] px-8 md:px-16 lg:px-24 mb-6 font-bold">Ecco le nostre ultime news! per ulteriori aggiornamenti e notizie seguici sulla nostra pagina Instagram</p>
                <div className="animate-slidein opacity-0 [--slidein-delay:1200ms] px-8 md:px-16 lg:px-24">
                    <div className="bg-sky-500 rounded-md text-white px-4 py-1 w-fit text-xl md:text-2xl lg:text-3xl mb-3">{currYear}</div>
                    {sortedNews[currYear].map((news, index) => (
                        <div key={index} className="mb-16">
                            <label className="font-bold text-gym-orange mb-4 flex justify-center content-center items-center text-xl sm:text-2xl md:text-2xl pt-0">{news.monthText}</label>
                            <div className="flex flex-col items-start gap-8 items-center ps-10">
                                {dayNews[index].map((todayNews) => (
                                    <div className="flex gap-3 mr-auto items-center">
                                        <div className="relative bg-gym-orange font-bold text-gym-grey w-14 h-14 py-4 px-4 text-center rounded-md pt-6">{todayNews.day}
                                            <div className="absolute bg-gym-gray text-gym-orange rounded-t-md top-0 left-0 right-0 mx-0 py-0">{todayNews.dayText}</div>
                                        </div>
                                        <span>{todayNews.newsText}</span>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatNews;