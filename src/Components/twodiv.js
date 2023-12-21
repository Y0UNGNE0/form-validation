import React from "react";

export default function twodiv() {
  const buttonStyle = {
    backgroundColor: "#4091bf",
  };
  const buttonStyleB = {
    backgroundColor: "#000",
  };
  return (
    <div>
      {" "}
      <div className="row w-88 pb-5 mb-5 ">
        <div className="col-md-6 justify-content-center">
          <div className=" px-5 text-center">
            <div className="row borderbottom pt-5 pb-2">
              <div className="col-md pb-3 pt-2">
                <p className="fs-3">
                  <strong> THIS IS AN IMPORTANT HEADING</strong>
                </p>
                <p className="fs-7">AND THIS IS WHERE WE TALK ABOUT WHY</p>
              </div>
            </div>
            <div className="row bordertop mt-2 py-3"></div>

            <div className="pb-2 mb-3">
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus. Praesent semper mod quis eget mi. Etiam eu ante risus.
                Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet
                pulvinar. Nam turpis nisi consequat etiam
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 cen">
                <div className=" text-center">
                  <button
                    type="button"
                    className="button text-white px-5 py-3"
                    style={buttonStyle}
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
                    <strong>LET DO THIS</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 justify-content-center">
          <div className="px-5 text-center">
            <div className="row borderbottom pt-5 pb-2">
              <div className="col-md pb-3 pt-2">
                <p className="fs-3">
                  <strong>THIS IS AN IMPORTANT HEADING</strong>
                </p>
                <p className="fs-7">AND THIS IS WHERE WE TALK ABOUT WHY</p>
              </div>
            </div>
            <div className="row bordertop mt-2 py-3"></div>

            <div className="pb-2 mb-3">
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus. Praesent semper mod quis eget mi. Etiam eu ante risus.
                Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet
                pulvinar. Nam turpis nisi consequat etiam
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 cen">
                <div className=" text-center">
                  <button
                    type="button"
                    className="button text-white px-5 py-3"
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
                    <strong>WAIT, WHAT?</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
