import React, { useEffect } from "react";

const FormDataDisplay = ({
  firstName,
  lastName,
  email,
  number,
  job,
  flinks,
}) => {
  console.log("Received props:", {
    firstName,
    lastName,
    email,
    number,
    job,
    flinks,
  });

  useEffect(() => {
    console.log("FormDataDisplay Props:", {
      firstName,
      lastName,
      email,
      number,
      job,
      flinks,
    });
  }, [firstName, lastName, email, number, job, flinks]);

  return (
    <div>
      <h2>Form Data Display</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {number}</p>
      <p>Job Title: {job}</p>
      <p>Usage of Flinks: {flinks}</p>
    </div>
  );
};

export default FormDataDisplay;
