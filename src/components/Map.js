import React from "react";

const LocationMap = () => {
  return (
    <iframe
      className="mx-auto border-2 rounded-2xl shadow-2xl"
      // width="100%"
      //   height="100px"
      style={{ width: "90%", height: 580, marginBottom: "40px" }}
      loading="lazy"
      allowFullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3Sbzuhw7iEcRMAMO2u57u-U&language=it&key=AIzaSyDPx7o_pfJh4GLBG_KLOdFyEKli41K5IIA"
    />
  );
};
export default LocationMap;
