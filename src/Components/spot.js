import React from "react";

export default function spot() {
  const buttonStyle = {
    backgroundColor: "#4091bf",
  };
  const buttonStyleB = {
    backgroundColor: "#000",
  };
  return (
    <div>
      {" "}
      <div className="row w-88 laxz px-5 py-5">
        <div className="col-md-8">
          <div className="d-flex align-items-center gap-2">
            <div className="align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                className="bi bi-file-post text-muted"
                viewBox="0 0 16 16"
              >
                <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </svg>
            </div>
            <div className="pt-1">
              <h3>
                <strong>RECENT POSTS</strong>
              </h3>
            </div>
          </div>
          <div className="row py-5 ">
            <div className="col-md-4">
              <img
                src="https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580"
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-8 text-start">
              <p className="text-muted">JULY 24</p>
              <h5>
                <strong>REPAIRING A HYPERSPACE WINDOW</strong>
              </h5>
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus semper mod quisturpis nisi consequat etiam lorem.
                Phasellus quam turpis, feugiat et sit amet ornare in, hendrerit
                in lectus semper mod quis eget mi dolore.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-4">
              <img
                src="https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580"
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-8 text-start">
              <p className="text-muted">JULY 24</p>
              <h5>
                <strong>REPAIRING A HYPERSPACE WINDOW</strong>
              </h5>
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus semper mod quisturpis nisi consequat etiam lorem.
                Phasellus quam turpis, feugiat et sit amet ornare in, hendrerit
                in lectus semper mod quis eget mi dolore.
              </p>
            </div>
          </div>{" "}
          <div className="row py-5">
            <div className="col-md-4">
              <img
                src="https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580"
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-8 text-start">
              <p className="text-muted">JULY 24</p>
              <h5>
                <strong>REPAIRING A HYPERSPACE WINDOW</strong>
              </h5>
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus semper mod quisturpis nisi consequat etiam lorem.
                Phasellus quam turpis, feugiat et sit amet ornare in, hendrerit
                in lectus semper mod quis eget mi dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {" "}
          <div className="align-items-center ">
            <div className="d-flex align-items-center pb-5 gap-3">
              <div className="align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  fill="currentColor"
                  className="bi bi-file-post text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                </svg>
              </div>
              <div className="pt-1">
                <h3>
                  <strong>SPOTLIGHT</strong>
                </h3>
              </div>
            </div>

            <div className="card text-start spot-card ">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="card-img-top rounded"
                alt="..."
              />
              <div className="py-3 laxz">
                <h5 className="card-title">
                  <strong>NEURAL LINK</strong>
                </h5>
                <p className="card-title text-muted">
                  THE PROS AND CONS. MOSTLY CONS.
                </p>

                <p className="card-text">
                  Phasellus quam turpis, feugiat sit amet ornare in, hendrerit
                  in lectus semper mod quisturpis nisi consequat ornare in,
                  hendrerit in lectus semper mod quis eget mi quat etiam lorem.
                  Phasellus quam turpis, feugiat sed et lorem ipsum dolor
                  consequat dolor feugiat sed et tempus consequat etiam. Lorem
                  ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit
                  in lectus semper mod quisturpis nisi consequat etiam lorem sed
                  amet quam turpis.
                </p>
                <div className="py-3">
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
                    <strong>CONTINUE READING</strong>
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
