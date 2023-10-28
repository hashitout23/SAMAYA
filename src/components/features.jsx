import React from "react";

const Features = () => {
  return (
    <div>
    <button
    className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium pointer-events-auto disabled:opacity-50 border rounded-full w-16 h-16"
    type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
    <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="text-black block border-black align-middle">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-black">
      </path>
    </svg>
     </button>

    </div>
  
  );
};

export default Features;