// src/pages/Hero.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen text-white bg-[#0d1117]">
      {/* Left Sticky Profile Card */}
      <aside className="lg:w-1/4 w-full h-screen p-6 lg:fixed top-20 left-0 bg-[#0d1117] border-r border-gray-800 z-30">
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
            <p>📍 Naogaon, Rajshahi, Dhaka ,Bangladesh</p>
            <p>⏰ 08:45 (UTC -12:00)</p>
            <p>✉️ ahsanh964@gmail.com</p>
            <p>
              🔗{" "}
              <a
                href="https://www.facebook.com/ahsan..."
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

      {/* Right Scrollable Content */}
      <main className="lg:ml-[25%] w-full p-6">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Hi 👋, I'm Ahsan Habib</h2>
          <p className="text-lg text-gray-300 mb-4">
            My Aim FULL-STACK developer from Bangladesh
          </p>
          <img
            src="/assets/images/circuit-board.png"
            alt="Hero Visual"
            className="mx-auto lg:mx-0 w-full max-w-2xl mb-6 rounded"
          />
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            <a
              href="https://github.com/Ahsan-1015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="bg-blue-600 text-white py-2 px-6 rounded-full inline-block"
          >
            Download Resume
          </a>
        </div>
      </main>
    </section>
  );
}

export default Hero;
