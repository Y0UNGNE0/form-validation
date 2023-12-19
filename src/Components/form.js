import React, { useState } from "react";

export default function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [flinks, setFliks] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleFliksChange = (e) => {
    setFliks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    const jobRegex = /^[^\d]+$/;

    const numberRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!jobRegex.test(job)) {
      alert("Job title cannot contain numbers");
      return;
    }

    if (!numberRegex.test(number)) {
      alert("Invalid number format");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div>
      <div className="py-4 text-center item-align-center justify-content-center">
        <div>
          <h3 className="text-center">Request a Demo</h3>
        </div>
        <div className="para-colour text-center">
          Just answer a few questions so that we can personalize the right
          experience for you.
        </div>
      </div>
      <div className="card p-2 shadow">
        <form onSubmit={handleSubmit}>
          <h5 className="py-3">Powering world-class companies</h5>
          <div className="form-row d-flex text-start py-2 flex-wrap card-body">
            <div className="form-group col-md-6 px-2">
              <label htmlFor="first" className="py-2">
                First name <span className="red">*</span>
              </label>
              <input
                className="form-control py-2"
                id="first"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group col-md-6 px-2">
              <label htmlFor="last" className="py-2">
                Last name <span className="red">*</span>
              </label>
              <input
                className="form-control py-2"
                id="last"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-row d-flex text-start py-2 flex-wrap card-body">
            <div className="form-group col-md-6 px-2">
              <label htmlFor="business" className="py-2">
                Business email <span className="red">*</span>
              </label>
              <input
                className="form-control py-2"
                id="business"
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6 px-2">
              <label htmlFor="phone" className="py-2">
                Phone number <span className="red">*</span>
              </label>
              <input
                className="form-control py-2"
                id="phone"
                type="text"
                value={number}
                onChange={handleNumberChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="form-row d-flex text-start py-2 card-body">
            <div className="form-group col-md-6 px-2">
              <label htmlFor="job" className="py-2">
                Job title <span className="red">*</span>
              </label>
              <input
                className="form-control py-2"
                id="job"
                type="text"
                value={job}
                onChange={handleJobChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="form-row d-flex text-start py-2 card-body">
            <div className="form-group col-md-6 px-2">
              <label htmlFor="fliks" className="py-2">
                What would you be using Flinks for?{" "}
                <span className="red">*</span>
              </label>
              <input
                className="form-control py-2 bigger-widh"
                id="fliks"
                type="text"
                value={flinks}
                onChange={handleFliksChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="form-row d-flex py-2 card-body text-end">
            <div className="form-group col-md-6 py-3 px-2 card-body">
              <button type="submit" className="btn btn-primary px-5">
                REQUEST A DEMO
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
