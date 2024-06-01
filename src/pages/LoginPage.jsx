import React, { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
        { withCredentials: true }
      );
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      console.log(data);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("somthing went wrong");
    }
  };

  return (
    <>
      <div className=" text-center">
        <h1 className=" font-bold text-2xl mt-10">Login to your account</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-full md:max-w-[430px]  mx-auto flex flex-col items-center gap-4 bg-white  shadow-lg  border-gray-200 border rounded-lg mt-10 pt-12"
      >
        <Input
          type="email"
          label="Email"
          id="email"
          placeholder="Enter your email"
          handleOnChange={handleOnChange}
          value={formData.email}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          handleOnChange={handleOnChange}
          value={formData.password}
        />

        <div className=" flex justify-between self-start w-full px-5 md:px-12">
          <div className="flex gap-2 ">
            <input type="checkbox" name="" id="remember" />
            <span className=" text-gray-500 text-sm ">Remember me</span>
          </div>
          <p className=" text-blue-700  hover:underline cursor-pointer text-sm">
            Forget password?
          </p>
        </div>
        <button className=" p-2 bg-blue-600 font-semibold text-white rounded-lg  w-4/5">
          Login
        </button>

        <div className=" w-4/5 flex mb-12">
          <span className=" text-gray-500 ">
            Dont have any account?{" "}
            <Link className=" text-blue-700" to="/sign-up">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
