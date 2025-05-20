// src/pages/Hero.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen text-white bg-[#0d1117]">
      <main className="w-full p-6 mt-3 ">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Hi 👋, I'm Ahsan Habib</h2>
          <p className="text-lg text-gray-300 mb-4">
            My Aim FULL-STACK developer from Bangladesh
          </p>
          <img
            src="https://media.gettyimages.com/id/2156554760/photo/aveiro-portugal-cristiano-ronaldo-of-portugal-celebrates-scoring-portugal-second-goal-during.jpg?s=612x612&w=0&k=20&c=wnGzU0GJkvnmxRwu4DyXLmKMFyd9Rw71LSi8N6sm7_0="
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
