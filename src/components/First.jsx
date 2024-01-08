import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export const First = () => {
  const [text] = useTypewriter({
    words: ['Thankyou', 'for visiting', 'this website.', 'Contact Me !'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 0,
  });

  return (
    <div className="h-[120vh]" id="first">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" p-10 text-white">
          <span
            className="font-bold text-white pt-3 md:text-7xl text-5xl"
          >
            {text}
          </span>
          <span className="text-white pl-8 sm:ml-2 pt-3 md:text-8xl text-6xl">
            <Cursor />
          </span>
        </h1>
      </div>
    </div>
  );
};
