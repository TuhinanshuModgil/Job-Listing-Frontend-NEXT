import React from 'react';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { ImCross } from "react-icons/im";


const Modal = ({ closeModal }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 text-black" >
      <div className="bg-white rounded-lg p-8 max-w-md ">
      <ImCross onClick={closeModal}/>

        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="text-gray-800">Modal content goes here.</p>
      </div>
    </div>
  );
};

export default Modal;