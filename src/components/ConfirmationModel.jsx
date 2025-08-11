import React from 'react';


const ConfirmationModel = ({ modalData }) => {
  return (
    <div className="fixed inset-0  mt-0 grid place-items-center overflow-auto bg-opacity-5 backdrop-blur-sm">
      <div className="w-11/12 max-w-[420px] rounded  bg-gray-200 p-8 border-1 border-gray-500">
        <p className="text-2xl font-semibold ">
          {modalData.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 ">
          {modalData.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <button
            onClick={modalData.btn1Handler}
            className="cursor-pointer  py-[2px] px-[10px] font-semibold text-violet-900 hover:text-violet-950"
          >
            {modalData.btn1Text}
          </button>
          <button
            onClick={modalData.btn2Handler}
            className="cursor-pointer py-[8px] px-[10px] font-semibold text-gray-700 hover:text-gray-900 "
          >
            {modalData.btn2Text}
          </button>
        </div>
      </div>
    </div>

  );
};

export default ConfirmationModel;