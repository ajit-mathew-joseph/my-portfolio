import axios from "axios";
import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    myEmail: "ajit.m.joseph@gmail.com",
  };

  changeHandler = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  mailHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/contact",
    {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message
    })
  }

  render() {
    return (
      <form className="contact" onSubmit={(e) => this.mailHandler(e)}>
        <h2 className="contact__title" id="contact_me">Contact Me</h2>

        <div className="contact__input-container">
          <label htmlFor="nameInput" className="contact__label">
            Name
          </label>
          <input
            type="text"
            name="nameInput"
            placeholder="Your Full Name"
            className="contact__field"
            onChange={this.changeHandler("name")}
            required
          />
        </div>

        <div className="contact__input-container">
          <label htmlFor="emailInput" className="contact__label">
            Email
          </label>
          <input
            type="email"
            name="emailInput"
            placeholder="Your Email"
            className="contact__field"
            onChange={this.changeHandler("email")}
            required
          />
        </div>

        <div className="contact__input-container">
          <label htmlFor="phoneInput" className="contact__label">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneInput"
            placeholder="Your Contact Number"
            className="contact__field"
            onChange={this.changeHandler("phoneNumber")}
          />
        </div>

        <div className="contact__input-container">
          <label htmlFor="messageInput" className="contact__label">
            Message
          </label>
          <textarea
            type="text"
            name="nameInput"
            placeholder="A Message"
            className="contact__field--textArea"
            onChange={this.changeHandler("message")}
          />
        </div>

        <button className="contact__submit" type="submit">Submit</button>
      </form>
    );
  }
}

export default Contact;
