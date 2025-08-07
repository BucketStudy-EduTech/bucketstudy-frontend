import React from 'react';


const ConfirmationModel = ({ modalData }) => {
  return (
    <div className="fixed inset-0  !mt-0 grid place-items-center overflow-auto bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[380px] rounded-lg border border-gray-700 bg-gray-400 p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 ">
          {modalData.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <button
            onClick={modalData.btn1Handler}
            className="cursor-pointer rounded-md bg-yellow-50 py-[8px] px-[20px] font-semibold text-red-400"
          >
            {modalData.btn1Text}
          </button>
          <button
            onClick={modalData.btn2Handler}
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-gray-700 bg-yellow-50"
          >
            {modalData.btn2Text}
          </button>
        </div>
      </div>
    </div>

  );
};

export default ConfirmationModel;