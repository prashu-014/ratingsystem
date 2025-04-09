import React, { useState } from "react";
import InputBox from "../component/ui/InputBox";
import Textarea from "../component/ui/Textarea";
import Button from "../component/ui/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
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
      name: "",
      email: "",
      password: "",
      address: "",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <section className=" border shadow-2xl w-3/4 md:w-2/5  p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Register Page</h1>
          <hr />
          <InputBox
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            min={10}
            max={60}
          />
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
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <Button name="SignUp" style="bg-green-800" type="submit" />
        </form>
        <h1 className="text-sm mt-2 text-center">
          Already have an account{" "}
          <a href="" className="underline text-blue-600 font-bold">
            Log In
          </a>
        </h1>
      </section>
    </div>
  );
};

export default Login;
