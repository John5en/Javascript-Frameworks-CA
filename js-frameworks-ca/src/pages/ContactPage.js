import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    //validation

    if (formData.fullName.length < 3) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Full Name must be at least 3 characters.",
      }));
      isValid = false;
    }

    if (formData.subject.length < 3) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject must be at least 3 characters.",
      }));
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
      isValid = false;
    }

    if (formData.body.length < 3) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        body: "Body must be at least 3 characters.",
      }));
      isValid = false;
    }

    if (isValid) {
      console.log("Form data:", formData);
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <p className="mb-4">Please fill in the required fields.</p>

      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name:
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.fullName ? "is-invalid" : ""}`}
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <p className="invalid-feedback">{formErrors.fullName}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject:
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.subject ? "is-invalid" : ""}`}
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <p className="invalid-feedback">{formErrors.subject}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <p className="invalid-feedback">{formErrors.email}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body:
        </label>
        <textarea
          className={`form-control ${formErrors.body ? "is-invalid" : ""}`}
          id="body"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          required
        ></textarea>
        <p className="invalid-feedback">{formErrors.body}</p>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
