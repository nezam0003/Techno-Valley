import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
