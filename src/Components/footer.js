import React from "react";

const Footer = () => {
  const buttonStyle = {
    backgroundColor: "#4091bf",
  };

  const buttonStyleB = {
    backgroundColor: "#000",
  };

  return (
    <div className="row p-5 bg-dark text-colour boder-bottom pb-5">
      <div className="col-md-3">
        <div className="text-start ps-3 py-3 text-colour">
          <div>
            <h3 className="text-white">
              <strong>FILLER LINKS</strong>
            </h3>
          </div>
          <div className="border-bottom ">
            <p>Quam turpis feugiat dolor</p>
          </div>
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>
          <div className="border-bottom text-white">
            <p>Quam turpis feugiat dolor</p>
          </div>
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        {" "}
        <div className="text-start ps-3 py-3 text-colour">
          <div>
            <h3 className="text-white">
              <strong>FILLER LINKS</strong>
            </h3>
          </div>
          <div className="border-bottom ">
            <p>Quam turpis feugiat dolor</p>
          </div>
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
        </div>{" "}
        <div className="text-start ps-3 py-3 text-colour">
          <div>
            <h3 className="text-white">
              <strong>FILLER LINKS</strong>
            </h3>
          </div>
          <div className="border-bottom text-colour">
            <p>Quam turpis feugiat dolor</p>
          </div>
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="border-bottom">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
          <div className="">
            <p>Quam turpis feugiat dolor</p>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-6">
        {" "}
        <div className="text-start ps-3 py-3 text-colour">
          <div>
            <h3 className="text-white">
              <strong>FILLER LINKS</strong>
            </h3>
          </div>
          <div className="border-bottom text-colour">
            <p>
              Hi! This is ZeroFour, a free, fully responsive HTML5 site template
              by AJ for HTML5 UP. It's Creative Commons Attribution licensed so
              use it for any personal or commercial project (just credit us for
              the design!).
            </p>
          </div>
          <div className="py-3">
            <button
              type="button"
              className="button text-white px-3 py-2"
              style={buttonStyleB}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right-circle pe-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
              <strong>Learn More</strong>
            </button>
          </div>
        </div>{" "}
        <div className="text-start ps-3 py-3 text-colour">
          <div>
            <h3 className="text-white">
              <strong>FILLER LINKS</strong>
            </h3>
          </div>
          <div className=" text-white row py-3">
            <div className="col-md-6 pb-3">
              <div className="row">
                <div className="col-6">
                  <p>
                    <strong>facebook</strong>
                  </p>{" "}
                  <p>
                    <strong>Twitter</strong>
                  </p>{" "}
                  <p>
                    <strong>Instagram</strong>
                  </p>{" "}
                  <p>
                    <strong>Snapchat</strong>
                  </p>
                </div>
                <div className="col-6 text-colour">
                  <p>@facebook</p>
                  <p>@twitter</p> <p>@instagram</p> <p>@sanapchat</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <p>
                    <strong>address</strong>
                  </p>{" "}
                  <p>
                    <strong>phone</strong>
                  </p>{" "}
                </div>
                <div className="col-6 text-colour">
                  <p>1234 Fictional Rd Nashville, TN 00000-0000 USA</p>
                  <p>(000) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-dark p-5 text-colour">
        © Untitled. All rights reservedDesign: HTML5 UPDemo Images: Unsplash
      </p>{" "}
    </div>
  );
};

export default Footer;
