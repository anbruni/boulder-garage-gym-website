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
            {/* <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg> */}
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
