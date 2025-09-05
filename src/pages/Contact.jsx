import PropTypes from "prop-types";
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

const Contact = ({ showBorder = false, className = "" }) => {
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
      className={`p-2 lg:p-12 bg-[#0d1117] min-h-screen rounded-xl ${className} ${
        showBorder ? "border border-gray-500 rounded-xl" : ""
      }`}
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
              <button
                onClick={() => {
                  // Show scheduling options
                  const schedulingOptions = [
                    {
                      name: "Email Request",
                      action: () => {
                        const subject = "Schedule a Call - Portfolio Inquiry";
                        const body = `Hi there,\n\nI'd like to schedule a call to discuss my project requirements.\n\nBest regards,\n[Your Name]`;
                        const mailtoLink = `mailto:${
                          contactConfig.email
                        }?subject=${encodeURIComponent(
                          subject
                        )}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailtoLink;
                      },
                    },
                    {
                      name: "Calendly Booking",
                      action: () => {
                        if (contactConfig.scheduling?.calendly) {
                          window.open(
                            contactConfig.scheduling.calendly,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        } else {
                          alert(
                            "Calendly link not configured. Please contact via email."
                          );
                        }
                      },
                    },
                    {
                      name: "Zoom Meeting",
                      action: () => {
                        if (contactConfig.scheduling?.zoomMeeting) {
                          window.open(
                            contactConfig.scheduling.zoomMeeting,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        } else {
                          alert(
                            "Zoom meeting link not configured. Please contact via email."
                          );
                        }
                      },
                    },
                  ];

                  // Create and show a simple modal for scheduling options
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

                  const modalContent = document.createElement("div");
                  modalContent.className =
                    "bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 max-w-md w-full mx-4";

                  const title = document.createElement("h3");
                  title.className = "text-xl font-bold text-blue-400 mb-4";
                  title.textContent = "Choose Scheduling Method";
                  modalContent.appendChild(title);

                  const optionsContainer = document.createElement("div");
                  optionsContainer.className = "space-y-3";

                  schedulingOptions.forEach((option) => {
                    const button = document.createElement("button");
                    button.className =
                      "w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-lg transition-colors text-left";
                    button.textContent = option.name;
                    button.onclick = () => {
                      document.body.removeChild(modal);
                      option.action();
                    };
                    optionsContainer.appendChild(button);
                  });

                  modalContent.appendChild(optionsContainer);

                  const cancelButton = document.createElement("button");
                  cancelButton.className =
                    "w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors";
                  cancelButton.textContent = "Cancel";
                  cancelButton.onclick = () => {
                    document.body.removeChild(modal);
                  };
                  modalContent.appendChild(cancelButton);

                  modal.appendChild(modalContent);
                  document.body.appendChild(modal);
                }}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </button>
              <button
                onClick={() => {
                  // Show calendar options
                  const calendarOptions = [
                    {
                      name: "Google Calendar",
                      action: () => {
                        if (contactConfig.scheduling?.googleCalendar) {
                          window.open(
                            contactConfig.scheduling.googleCalendar,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        } else {
                          alert(
                            "Google Calendar not configured. Please contact via email."
                          );
                        }
                      },
                    },
                    {
                      name: "Calendly",
                      action: () => {
                        if (contactConfig.scheduling?.calendly) {
                          window.open(
                            contactConfig.scheduling.calendly,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        } else {
                          alert(
                            "Calendly not configured. Please contact via email."
                          );
                        }
                      },
                    },
                    {
                      name: "Email Request",
                      action: () => {
                        const subject = "Calendar Availability Request";
                        const body = `Hi there,\n\nI'd like to check your calendar availability for a meeting.\n\nBest regards,\n[Your Name]`;
                        const mailtoLink = `mailto:${
                          contactConfig.email
                        }?subject=${encodeURIComponent(
                          subject
                        )}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailtoLink;
                      },
                    },
                  ];

                  // Create and show a simple modal for calendar options
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

                  const modalContent = document.createElement("div");
                  modalContent.className =
                    "bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 max-w-md w-full mx-4";

                  const title = document.createElement("h3");
                  title.className = "text-xl font-bold text-blue-400 mb-4";
                  title.textContent = "Choose Calendar Method";
                  modalContent.appendChild(title);

                  const optionsContainer = document.createElement("div");
                  optionsContainer.className = "space-y-3";

                  calendarOptions.forEach((option) => {
                    const button = document.createElement("button");
                    button.className =
                      "w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-lg transition-colors text-left";
                    button.textContent = option.name;
                    button.onclick = () => {
                      document.body.removeChild(modal);
                      option.action();
                    };
                    optionsContainer.appendChild(button);
                  });

                  modalContent.appendChild(optionsContainer);

                  const cancelButton = document.createElement("button");
                  cancelButton.className =
                    "w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors";
                  cancelButton.textContent = "Cancel";
                  cancelButton.onclick = () => {
                    document.body.removeChild(modal);
                  };
                  modalContent.appendChild(cancelButton);

                  modal.appendChild(modalContent);
                  document.body.appendChild(modal);
                }}
                className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Availability Information */}
        <div className="bg-[#0b0f14] border border-purple-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Availability
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Business Hours</p>
                <p className="text-white font-medium">
                  {contactConfig.availability?.businessHours ||
                    "Mon-Fri: 9:00 AM - 6:00 PM"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Timezone</p>
                <p className="text-white font-medium">
                  {contactConfig.availability?.timezone || "EST"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Response Time</p>
                <p className="text-white font-medium">
                  {contactConfig.availability?.responseTime ||
                    "Within 24 hours"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  showBorder: PropTypes.bool,
  className: PropTypes.string,
};

export default Contact;
