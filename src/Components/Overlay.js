import React, { useState } from "react";

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="relative">
      {/* Button to toggle the overlay */}
      <button
        onClick={toggleOverlay}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Toggle Overlay
      </button>

      {/* Overlay div */}
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-white opacity-75  z-50">
          {/* Content inside the overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            This is the overlay content.
            <button
              onClick={toggleOverlay}
              className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
