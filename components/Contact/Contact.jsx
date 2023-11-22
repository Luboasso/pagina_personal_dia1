import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const initialValue = {
    name: "",
    email: "",
  };

  const storedData =
    JSON.parse(localStorage.getItem("formData")) || initialValue;
  const [data, setData] = useState(storedData);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("info form", data);
    setMessage("Form sent successfully.");

    localStorage.setItem("formData", JSON.stringify(data));

    setTimeout(() => {
      setData(initialValue);
      localStorage.removeItem("formData"); 
      navigate("/");
    }, 3000);
  };

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
      </form>
      {message}
    </div>
  );
};
