import React from "react";

const CardPersona = ({ persona }) => {
  const personaPhotoStyle = {
    backgroundImage: `url(${persona.photo})`,
    backgroundSize: "cover",
  };

  return (
    <div className="max-w-xs md:w-4/5 lg:max-w-full lg:w-3/5 lg:flex mb-8 mx-auto rounded-2xl shadow-2xl animate-slidein opacity-0 [--slidein-delay:1600ms] ">
      <div
        className="h-72 w-full lg:max-w-56 flex-none bg-cover rounded-t-xl lg:rounded-xl lg:rounded-r-none text-center overflow-hidden"
        style={personaPhotoStyle}
        title="Foto allenatore"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 lg:border-2 bg-white rounded-xl rounded-t-none lg:rounded-l-none lg:rounded-r-xl p-4 flex flex-col justify-between leading-normal">
        <div>
          <p className="text-sm text-gray-600 flex items-center">
            {persona.role}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{persona.name}</div>
          <p className="text-gray-700 text-base">{persona.about}</p>
        </div>
      </div>
    </div>
  );
};
export default CardPersona;
