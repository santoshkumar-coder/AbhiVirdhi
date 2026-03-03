import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Img from "../../../assests/contact.jpg";
import { base_url } from "../../../base_url";
interface ContactFormData {
  username: string;
  email: string;
  contact: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    username: "",
    email: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    contact: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "username":
        if (!/^[A-Za-z\s]*$/.test(value)) {
          error = "Username should not contain numbers";
        }
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;

      case "contact":
        if (!/^\d*$/.test(value)) {
          error = "Only numbers allowed";
        } else if (value.length > 10) {
          error = "Contact number cannot exceed 10 digits";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  /* ---------- HANDLE INPUT CHANGE ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Prevent typing digits in username
    if (name === "username" && /\d/.test(value)) return;

    // Prevent more than 10 digits
    if (name === "contact" && value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  /* ---------- HANDLE SUBMIT ---------- */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post(`${base_url}contact-us`, {
      username: formData.username,
      email: formData.email,
      contact_number: formData.contact,
      message: formData.message,
    });
    console.log("cnst : ", res.data);
    if (res.data.status == true) {
      setStatus(true);
      setFormData({
        username: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center py-3 px-5 font-titillium">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full h-full">
          <img
            src={Img}
            alt="Contact"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl text-blue-500 font-bold mb-6">Contact Us</h2>
          {status && (
            <>
              <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Your request has been submitted successfully{" "}
              </p>
            </>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Contact Number */}
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}

            {/* Message */}
            <textarea
              name="message"
              placeholder="Enquiry About / Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
