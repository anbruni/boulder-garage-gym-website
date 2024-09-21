// Footer.js
import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
        <div className="bg-[url('./gym-logo-orange.png')] bg-cover gym-logo gym-logo--footer"></div>
        <div className="flex flex-col">
          <ul className="text-left flex flex-col gap-y-3">
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="business-outline"></ion-icon>
              <span>Boulder Garage</span>
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="map-outline"></ion-icon>
              Via Dove Siamo Noi 2A, Cumiana, TO - 10047
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="call-outline"></ion-icon>
              333 444444
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon class="li--icon" name="globe-outline"></ion-icon>
              info@bouldergarage.com
            </li>
            <li className="flex content-center items-center gap-x-3">
              <ion-icon
                class="li--icon"
                name="accessibility-outline"
              ></ion-icon>
              P.IVA: 1234567890
            </li>
          </ul>
        </div>
        <div className="flex md:justify-around sm:justify-center gap-4 md:flex-col sd:flex-row">
          <div>
            <ion-icon class="logo-facebook" name="logo-facebook"></ion-icon>
          </div>
          <div>
            <ion-icon class="logo-instagram" name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
