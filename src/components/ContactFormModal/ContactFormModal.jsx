import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_KEY_SERVICE_ID,
        import.meta.env.VITE_KEY_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_KEY_USER_ID,
      )
      .then(
        () => {
          console.log("Email sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          notify(); // Call notification (Toastify) function on success
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 6000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const notify = () => {
    toast.success("Email sent Successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark rounded-lg p-6 space-y-4 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 font-serif flex justify-end">
          Delux<strong className="text-yellow-600">Rental</strong>
        </h2>
        <h2 className="text-lg font-bold mb-4 font-serif">
          Hi! How Can We Help?
        </h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 font-serif"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
               dark:text-white dark:bg-transparent leading-tight 
               focus:outline-none focus:shadow-outline font-serif"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 font-serif"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
               dark:text-white dark:bg-transparent leading-tight 
               focus:outline-none focus:shadow-outline font-serif"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 font-serif"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 
              px-3 text-gray-700 dark:text-white dark:bg-transparent leading-tight 
              focus:outline-none focus:shadow-outline font-serif resize-none"
              id="message"
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-outline font-serif"
              type="submit"
            >
              Send
            </button>
            <button
              className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 
              focus:outline-none font-serif "
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
        {showSuccessMessage && (
          <p className="font-serif mt-4 text-green-700">
            Thank you for your Email. We'll get back to you shortly!
          </p>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactFormModal;
