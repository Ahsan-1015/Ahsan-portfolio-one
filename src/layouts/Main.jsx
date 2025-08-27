import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-[#0d1117] text-white ">
      <Navbar />

      {/* Main layout wrapper */}
      <div className="flex flex-col xl:flex-row mt-4">
        {/* Left Profile Section */}
        <aside
          className="w-full lg:w-1/5  2xl:w-1/4 p-6  bg-[#0d1117] 
                         lg:fixed lg:top-20 lg:h-[calc(100vh-5rem)] z-30 relative"
        >
          <div className="flex sm:flex-col md:flex-row  lg:flex-col items-center lg:items-start text-center lg:text-left mt-28 ml-5 2xl:ml-14 lg:mt-10">
            <img
              src="https://media.gettyimages.com/id/2208522519/photo/riyadh-saudi-arabia-cristiano-ronaldo-of-al-nassr-looks-on-prior-to-the-saudi-pro-league.jpg?s=612x612&w=0&k=20&c=MEitxPjqREuMXVIpLrVjYumuEozAANGh04ijeH_tjjI="
              alt="Ahsan Habib"
              className="w-24 h-24 md:w-56 md:h-56 xl:w-60 xl:h-60 lg:w-52 lg:h-52 bg-cover object-cover 2xl:w-80 2xl:h-80 rounded-full items-center border-2 border-yellow-500 mb-4"
            />
            <div className=" lg:mt-8">
              <div className="text-left w-full ml-10 md:ml-16 lg:ml-0">
                <h1 className="text-3xl  font-bold">Ahsan Habib</h1>
                <p className="text-md text-gray-400">Ahsan-1015</p>
                <p className="mt-1  text-gray-300">I am noob</p>
              </div>

              <div className="my-4 ml-16 hidden md:block lg:ml-0 text-left w-full text-sm space-y-1">
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

            {/*sm device hidden position start  */}
            <div className="my-4 ml-16  lg:ml-0 text-left w-full text-sm space-y-1 absolute top-64 -right-6 md:hidden ">
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
            {/*sm device hidden position end  */}
          </div>
        </aside>

        {/* Right Content Section */}
        <div className="lg:ml-[20%] 2xl:ml-[25%]   mt-10 md:mt-2">
          <div className="min-h-[calc(100vh-306px)] mt-24 md:mt-20 lg:mt-32 px-4 ">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
