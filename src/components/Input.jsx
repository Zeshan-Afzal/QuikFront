import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function Input({ type, label, id, placeholder, handleOnChange, value }) {
  const [showHidePassword, setShowHidePassword] = useState("password");

  return (
    <div className=" flex flex-col  w-11/12 md:w-4/5 relative gap-1">
      {label && (
        <label className=" md:text-lg md:font-semibold text-gray-500">
          {label}
        </label>
      )}
      <input
        className=" p-2 rounded-lg border border-gray-300 focus:outline-none bg-slate-100"
        type={type === "password" ? showHidePassword : type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        id={id}
      />
      {type === "password" && showHidePassword === "password" && (
        <FaEyeSlash
          onClick={() => setShowHidePassword("text")}
          className=" absolute right-4 top-12 cursor-pointer"
        />
      )}
      {showHidePassword === "text" && (
        <FaEye
          onClick={() => setShowHidePassword("password")}
          className=" absolute right-4 top-12 cursor-pointer"
        />
      )}
    </div>
  );
}

export default Input;
