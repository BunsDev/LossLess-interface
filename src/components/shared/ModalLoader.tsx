import React from "react";

const ModalLoader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="fixed top-0 z-50 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          {children}
        </div>
      );
};

export default ModalLoader;