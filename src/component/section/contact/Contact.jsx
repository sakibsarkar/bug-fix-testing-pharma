import "./contact.css";
import React, { useState } from "react";
import { timerVanish } from "../../../Utils/timerVanish";

const Contact = () => {

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.user_email.value;
    const subject = form.subject.value;
    const message = form.notes.value;

    if (email && subject && message) {
      form.reset()
      return timerVanish(success, setSuccess)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <div className="container">
          <h2 className="title">Contact</h2>
        </div>
      </div>
      <form className="container form-container" onSubmit={handleSubmit}>
        <input hidden name="to_name" type="text" value="Testing-Pharma" onChange={(e) => console.log(e)} />
        <div className="email-input-box">
          <h4>Email</h4>
          <input
            name="user_email"
            type="email"
            required
            placeholder="Type Your Email Here"
          />
        </div>
        <div className="subject-input-box">
          <h4>Subject</h4>
          <input
            name="subject"
            type="text"
            required
            placeholder="Type Subject Here (ex. Need price quote)"
          />
        </div>
        <div className="message-input-box">
          <h4>Message</h4>
          <textarea
            name="notes"
            cols="30"
            rows="10"
            required
            placeholder="Type Full Message or Inquiry Here"
          ></textarea>

          {
            success ?
              <div className="notification">
                <p>
                  Your message has been submitted. We will get back to you shortly.
                </p>
              </div>
              :
              ""
          }
        </div>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
