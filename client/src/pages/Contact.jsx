import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.bg_secondary};
  min-height: 100vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.bg};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const FormTitle = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};
  min-height: 150px;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message submitted!");
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <FormTitle>Contact Us</FormTitle>
        <FormInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormTextarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactUs;
