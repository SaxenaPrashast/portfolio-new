import React from "react";

const CertificateModal = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-[80vh] w-full p-4">
        <img
          src={imageUrl}
          alt="Certificate"
          className="rounded-lg w-full h-full object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex justify-center items-center text-xl font-bold hover:bg-gray-200 transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CertificateModal;
