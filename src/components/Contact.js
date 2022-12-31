import React from "react";

function Contact() {
  return (
    <div>
      <p className="subHeading">Like what you see?</p>
      <h2>I'd love to hear from you!</h2>
      <a
        href="mailTo:jenithrajlawat@gmail.com"
        style={{ textDecoration: "none" }}
        className="contactButton"
      >
        GET IN TOUCH
      </a>
    </div>
  );
}

export default Contact;
