import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Body from "./Body";
import Navbar from "./Navbar";

const LandingPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Body className="bg-base-100 rounded-md shadow-md mx-auto p-4 lg:p-6 max-w-7xl h-full overflow-y-scroll flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">👋 Selamat datang!</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Punya pertanyaan? Butuh bantuan cepat? Atau cuma mau ngobrol santai? <br />
            Aku di sini buat bantu kamu — kapan pun, soal apa pun!
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="btn btn-primary px-6 py-2 text-lg rounded-full"
          >
            Mulai Chat
          </button>
        </div>
      </Body>

     
    </>
  );
};

export default LandingPage;
