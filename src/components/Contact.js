import React, { useState } from "react";

import "../App.css";

import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");

  const [loader, setLoader] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true);

    db.collection("messages")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        query: query,
      })
      .then(() => {
        alert("Query submitted successfully!");
        setLoader(false);
      })
      .catch((error) => {
        alert("Error: " + error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setQuery("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>Contact Us</h1>
      <label>Name</label>
      <input
        placeholder="Your name"
        value={name}
        onChange={nameChangeHandler}
      />

      <label>Email</label>
      <input
        placeholder="Your email"
        value={email}
        onChange={emailChangeHandler}
      />

      <label>Subject</label>
      <input
        placeholder="Subject"
        value={subject}
        onChange={subjectChangeHandler}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={messageChangeHandler}
      />

      <label>Query</label>
      <input
        placeholder="Any queries"
        value={query}
        onChange={queryChangeHandler}
      />

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
