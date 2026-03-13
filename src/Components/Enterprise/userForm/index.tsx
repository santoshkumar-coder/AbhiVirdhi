import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { Add_enterprise } from "../../../api_fetch/enterprices";

interface Props {
  setModalVisiable: React.Dispatch<React.SetStateAction<boolean>>;
}

const FillOutUserForm: React.FC<Props> = ({ setModalVisiable }) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    companyName: "",
    number: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      companyName: "",
      number: "",
      email: "",
    };

    let valid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
      valid = false;
    }

    if (!number.trim()) {
      newErrors.number = "Phone number is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(number)) {
      newErrors.number = "Phone number must be 10 digits";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handle_enterprise = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const rs = (await Add_enterprise(name, number, email, companyName)) as {
      status: number;
    };

    if (rs.status === 201) {
      setModalVisiable(true);
      setName("");
      setCompanyName("");
      setNumber("");
      setEmail("");

      setErrors({
        name: "",
        companyName: "",
        number: "",
        email: "",
      });
    }
  };

  return (
    <div className="absolute top-5 lg:top-10 md:left-20 left-14 md:w-[30%] bg-white/90 p-3 md:p-5 rounded-xl font-titillium">
      <h1 className="text-center text-gray-800 font-bold text-base lg:text-xl">
        Fill Out For More Details
      </h1>

      <form onSubmit={handle_enterprise}>
        {/* NAME */}
        <div
          className={`flex items-center gap-4 border-2 rounded-md px-2 py-3 mt-5 ${
            errors.name ? "border-red-500" : "border-gray-400"
          }`}
        >
          <FaUser />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}

        {/* COMPANY */}
        <div
          className={`flex items-center gap-4 border-2 rounded-md px-2 py-3 mt-5 ${
            errors.companyName ? "border-red-500" : "border-gray-400"
          }`}
        >
          <FaUser />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Enter your Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        {errors.companyName && (
          <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
        )}

        {/* PHONE */}
        <div
          className={`flex items-center gap-4 border-2 rounded-md px-2 py-3 mt-5 ${
            errors.number ? "border-red-500" : "border-gray-400"
          }`}
        >
          <IoCallSharp />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Enter your Phone Number"
            value={number}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setNumber(value);
            }}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
          />
        </div>
        {errors.number && (
          <p className="text-red-500 text-xs mt-1">{errors.number}</p>
        )}

        {/* EMAIL */}
        <div
          className={`flex items-center gap-4 border-2 rounded-md px-2 py-3 mt-5 ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
        >
          <IoIosMailOpen />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Enter your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-5 bg-blue-800 font-bold rounded-md hover:bg-blue-700 w-full py-3 text-white"
        >
          Get in Touch
        </button>
      </form>
    </div>
  );
};

export default FillOutUserForm;