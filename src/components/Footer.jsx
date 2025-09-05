import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { contactConfig } from "../config/contact";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0d1117] to-[#0a0d12] text-white border  border-gray-800  rounded-xl transition-all duration-300  hover:shadow-lg hover:shadow-gray-500/25 hover:border-teal-600 ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand/About */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ahsan.dev
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Creating exceptional digital experiences through innovative design
              and cutting-edge development.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="/about"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                About
              </a>
              <a
                href="/projects"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Projects
              </a>
              <a
                href="/skills"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Skills
              </a>
              <a
                href="/contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right Column - Get In Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${contactConfig.email}`}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {contactConfig.email}
              </a>
              <a
                href={`tel:${contactConfig.phone}`}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {contactConfig.phone}
              </a>
              <p className="text-gray-300 text-sm">{contactConfig.location}</p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left Side - Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href={contactConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href={contactConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 text-white" />
              </a>
              <a
                href={contactConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-500 hover:bg-sky-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5 text-white" />
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="p-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Right Side - Copyright and Tech Stack */}
            <div className="text-center md:text-right space-y-1">
              <p className="text-gray-300 text-sm">
                © 2025 Ahsan. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center pb-6">
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors duration-200" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
