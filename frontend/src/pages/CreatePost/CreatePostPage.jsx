import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCreate } from "../../services/createpost";

export const CreatePostPage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const maxnumber = 20;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const limitedValue = inputValue.slice(0, maxnumber);
    setValue(limitedValue);
    if (inputValue.length > maxnumber) {
      alert(`Your message is too long, the limit is ${maxnumber} characters`);
    }
  };

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    console.log(token);
    event.preventDefault();
    const messageInput = document.getElementById("message");
    const messageValue = messageInput.value;
    if (token) {
      postCreate(messageValue, token);
      navigate("/posts");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Enter your message:</label>
        <input
          style={{ width: "300px", height: "50px", paddingLeft: "20px" }}
          id="message"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button role="submit-button" type="submit" id="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
};