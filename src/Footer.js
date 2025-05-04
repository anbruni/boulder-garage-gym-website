// Footer.js
import React from "react";
import "./style/Footer.css";

function Footer() {
  return (
    <footer
      id="contatti"
      className="border-t-4 min-h-96 footer--border footer--bg text-white py-4"
    >
      <h2 className="font-bold mb-4 text-center flex justify-center content-center items-center py-6 text-2xl sm:text-4xl md:text-4xl">
        <span className="title--line"></span>
        Contatti
        <span className="title--line"></span>
      </h2>
      <div className="px-6 gap-6 flex md:text-xl md:justify-center md:items-center md:text-center md:gap-x-16 sm:gap-x-1 justify-between device-flex--prop">
        <div className="bg-[url('./gym-logo-orange.webp')] bg-cover gym-logo gym-logo--footer"></div>
        <div className="flex flex-col">
          <ul className="text-left flex flex-col gap-y-3">
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="business-outline"></ion-icon>
              <span>Boulder Garage</span>
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="map-outline"></ion-icon>
              Via Giusto Lanteri, Cumiana, TO - 10040
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="call-outline"></ion-icon>
              393 0876268
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="globe-outline"></ion-icon>
              bouldergarage2024@gmail.com
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon
                class="li--icon"
                name="accessibility-outline"
              ></ion-icon>
              SSD Boulder Garage <br />
              P.IVA: 13049040010
            </li>
          </ul>
        </div>
        <div className="flex md:justify-around sm:justify-center gap-4 md:flex-col sd:flex-row">
          <div>
            <a href="https://www.instagram.com/boulder__garage/" aria-label="Visita la nostra pagina Instagram">
              <ion-icon class="logo-instagram" name="logo-instagram" loading="lazy"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
