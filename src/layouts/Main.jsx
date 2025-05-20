import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-[#0d1117] text-white flex">
      <Navbar />
      {/* Sticky Profile Left Side (Shared for all pages) */}
      <aside className="hidden lg:block lg:w-1/4 h-screen fixed top-20 left-0 bg-[#0d1117] border-r border-gray-800 p-6 z-30">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="/assets/images/profile.jpg"
            alt="Ahsan Habib"
            className="w-36 h-36 rounded-full border-4 border-yellow-500 mb-4"
          />
          <h1 className="text-2xl font-bold">Ahsan Habib</h1>
          <p className="text-sm text-gray-400">Ahsan-1015</p>
          <p className="mt-1 text-gray-300">I am noob</p>
          <div className="my-4 text-left w-full text-sm space-y-1">
            <p>📍 Naogaon, Rajshahi, Dhaka</p>
            <p>⏰ 08:45 (UTC -12:00)</p>
            <p>✉️ ahsanh964@gmail.com</p>
            <p>
              🔗{" "}
              <a
                href="https://www.facebook.com/..."
                className="text-blue-400 underline"
              >
                Facebook
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                href="https://violet-mercedes-9.tiiny.site/"
                className="text-blue-400 underline"
              >
                Website
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Right side content */}
      <div className="flex-1 lg:ml-[25%]">
        <div className="min-h-[calc(100vh-306px)] mt-24 md:mt-20 lg:mt-32 px-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
