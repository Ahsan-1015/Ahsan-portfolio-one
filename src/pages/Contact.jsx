import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTwitter,
} from "react-icons/fi";
import { contactConfig } from "../config/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Create mailto link with form data
      const subject = `New Project Inquiry - ${formData.service || "General"}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || "Not specified"}

Message:
${formData.message}

---
Sent from your portfolio website
      `;

      const mailtoLink = `mailto:${
        contactConfig.email
      }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="p-2 lg:p-12 bg-[#0d1117] min-h-screen border border-gray-500 rounded-xl"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block p-2 px-4 bg-blue-900/20 border border-blue-500/30 rounded-full mb-4">
          <span className="text-blue-400 text-sm font-medium">
            Let&apos;s Connect
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Have an exciting project in mind? I&apos;d love to collaborate with
          you to bring your vision to life. Let&apos;s create something
          extraordinary together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Contact Form */}
        <div className="bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors cursor-pointer"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option
                    key={index}
                    value={service}
                    className="bg-gray-800 text-white"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <FiSend className="mr-2" />
                  Send Message
                </div>
              )}
            </button>

            {/* Submit Status */}
            {submitStatus === "success" && (
              <div className="text-green-400 text-center py-2 bg-green-900/20 border border-green-500/30 rounded-lg">
                ✓ Message sent successfully! Check your email client.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-center py-2 bg-red-900/20 border border-red-500/30 rounded-lg">
                ✗ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Contact Info & Social */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <FiMail className="text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">
                    {contactConfig.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <FiPhone className="text-green-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">
                    {contactConfig.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <FiMapPin className="text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">
                    {contactConfig.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Me */}
          <div className="bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href={contactConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <FiLinkedin className="text-blue-400 w-6 h-6" />
              </a>
              <a
                href={contactConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]"
              >
                <FiGithub className="text-gray-400 w-6 h-6" />
              </a>
              <a
                href={contactConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/30 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <FiTwitter className="text-sky-400 w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Ready to Collaborate */}
          <div className="bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work on innovative projects and bring
              creative ideas to life. Let&apos;s discuss your next big idea!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold rounded-lg transition-all duration-300">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
