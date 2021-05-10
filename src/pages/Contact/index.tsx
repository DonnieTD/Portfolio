import React, { useState } from "react";
import { isEmail } from "lib";
import { Wrapper } from "./styles";
import axios from "axios";

export const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clear = () => {
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccess("Success! Will get to you shortly!");
  };
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();

        if (!isEmail(email)) {
          setError("Please choose a valid email");
        } else if (subject.length <= 0) {
          setError("Subject cannot be empty");
        } else if (message.length <= 0) {
          setError("Message cannot be empty");
        } else {
          axios
            .post(
              "https://donniethedev.co.za/api/enquiries/",
              {
                email,
                subject,
                message,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((data) => {
              clear();
            })
            .catch((e) => {
              setError(e.message);
            });
        }
      }}
    >
      {error && error !== "" && (
        <div className="errorToast">
          <strong>{error}</strong>
        </div>
      )}
      {success && success !== "" && (
        <div className="successToast">
          <strong>{error}</strong>
        </div>
      )}

      <form>
        <h1>Contace Me</h1>
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="email"
        />
        <input
          type="text"
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
          placeholder="subject"
        />
        <textarea
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};
