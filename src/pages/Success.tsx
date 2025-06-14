
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gold/5 to-white font-montserrat">
      <div className="bg-white/95 md:rounded-xl shadow-lg px-8 py-12 border border-gold/20 flex flex-col items-center">
        <h1 className="text-4xl mb-2 font-bold text-gold">¡Registro Exitoso!</h1>
        <p className="text-lg text-gray-700 mb-8">El formulario ha sido enviado correctamente.</p>
        <button
          className="bg-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-gold transition-colors duration-200 active:scale-97 mt-2"
          onClick={() => navigate("/")}
        >
          Llenar otro formulario
        </button>
      </div>
    </div>
  );
};

export default Success;
