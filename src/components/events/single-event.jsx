import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [emailError, setEmailError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
      setEmailError('Please enter the correct email format')
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("POST", data);
      setEmailError(data.message);
      inputEmail.current.value='';
    } catch (e) {
      console.log("Error,e");
    }
  };
  return (
    <div className="even_single_page">
      <h2>{data.title}</h2>
      <div style={{ width: "100%", height: "500px" }}>
        <Image src={data.image} alt={data.title} width={1000} height={500} />
      </div>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <p>{emailError}</p>
        <button >Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
