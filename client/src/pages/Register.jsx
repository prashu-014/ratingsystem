import React, { useState } from "react";
import InputBox from "../component/ui/InputBox";
import Button from "../component/ui/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <section className=" border shadow-2xl w-3/4 md:w-2/6  p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Login Page</h1>
          <hr />
          <InputBox
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputBox
            type="password"
            placeholder="Enter Passsword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            min={8}
            max={16}
          />
          <Button name="SignUp" style="bg-green-800" type="submit" />
        </form>
        <h1 className="text-sm mt-2 text-center">
          Don't have an account yet? 
          <a href="" className="underline text-blue-600 font-bold">
             SignUp
          </a>
        </h1>
      </section>
    </div>
  );
};

export default Register;
