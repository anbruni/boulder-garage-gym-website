import { React, useState, useEffect } from "react";
import "./style/ImageSlider.css";

export default function ImageSlider({ children: slides, autoSlide = false, autoSlideInterval = 5000 }) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [curr, autoSlide, autoSlideInterval])
  return (
    <div className="overflow-hidden relative w-full h-screen">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="left-arrow" alt="immagine precedente">
          <ion-icon name="chevron-back-outline" size={70}></ion-icon>
        </button>
        <button onClick={next} className="right-arrow" alt="prossima immagine">
          <ion-icon name="chevron-forward-outline" size={70}></ion-icon>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2.5" : "bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}