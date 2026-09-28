import React, { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all the fields");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="page">

      <p className="small-title">LET'S CONNECT</p>

      <h1>Get In <span>Touch</span></h1>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Let's work together!</h2>

          <p>
            Have a project idea or want to connect?
            Feel free to send me a message.
          </p>

          <div className="contact-item">
            📧 <span>pooja@gmail.com</span>
          </div>

          <div className="contact-item">
            📍 <span>Chennai, Tamil Nadu</span>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;