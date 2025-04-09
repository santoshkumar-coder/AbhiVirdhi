import React from "react";

interface Props {
  setModalVisiable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Success_modal: React.FC<Props> = ({ setModalVisiable }) => {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-screen bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-white/90 rounded-lg flex flex-col items-center justify-center p-5">
        <h1 className="font-semibold text-center mb-2">
          Thank you for contacting us.
        </h1>
        <h1 className="text-center mb-4">We will get back to you shortly.</h1>

        {/* OK Button aligned to the right */}
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded"
            onClick={() => setModalVisiable(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success_modal;
