import React from "react";
import log from "./ggg/image.jpg";
export default function design() {
  const buttonStyle = {
    backgroundColor: "#4091bf",
  };
  const buttonStyleB = {
    backgroundColor: "#000",
  };
  return (
    <div className="overflow-hidden">
      <div className="logo w-100">
        <div id="main">
          <div className="rounded" id="foo">
            <nav className="navbar shadow rounded navbar-expand-lg navbar-light bg-light d-flex justify-content-between bg-dark">
              <div className="d-flex px-3 siz text-black-50">
                <div className="size1 align-self-center">
                  {" "}
                  <button
                    className="navbar-toggler bg-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="size">
                  {" "}
                  <h1>
                    {" "}
                    <a className="navbar-brand text-white " href="#">
                      <strong>ZEROFOUR</strong>
                    </a>
                  </h1>
                </div>{" "}
              </div>

              <div
                className="collapse navbar-collapse justify-content-end px-3"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item px-2">
                    <a
                      className="nav-link active text-white "
                      aria-current="page"
                      href="#"
                    >
                      <strong>HOME</strong>
                    </a>
                  </li>

                  <li className="nav-item dropdown px-2">
                    <a
                      className="nav-link dropdown-toggle text-white "
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>DROPDOWN</strong>
                    </a>
                    <ul
                      className="dropdown-menu text-white bg-dark"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item text-white " href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white " href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link text-white" href="#">
                      <strong>ZEROFOUR</strong>
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link text-white" href="#">
                      <strong>RIGHTSIDEBAR</strong>
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link text-white" href="#">
                      <strong>NOSIDEBAR</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <div className="sizx justify-content-center align-content-center align-items-end ">
            {" "}
            <div className="row border-bottom pb-5 ">
              <div className="col-md h-25"></div>
            </div>{" "}
            <div className="row hopi border-top py-5 border-bottom ">
              {" "}
              <div className="col">
                {" "}
                <h1 className="text-white">
                  ZEROFOUR: A FREE RESPONSIVE SITE TEMPLATE BUILT ON HTML5 AND
                  CSS3 BY HTML5 UP{" "}
                </h1>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row border-top">
              <div className="col py-5">
                <div className="row">
                  <div className="col-md-8 pe-2">
                    {" "}
                    <h4 className="text-white text-center ">
                      DOES THIS STATEMENT MAKE YOU WANT TO CLICK THE BIG SHINY
                      BUTTON?
                    </h4>
                  </div>
                  <div className="col-md-4 cen">
                    <div className=" text-center">
                      <button
                        type="button"
                        className="btn btn-md text-white px-5 py-3"
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

                        <strong>
                          <h7>YES IT DOES</h7>
                        </strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="logog w-100">
          <div className="px-5 text-center ">
            <div className="row border-bottom pt-5 pb-2">
              <div className="col-md pb-3 pt-2">
                <p className="fs-3">
                  <strong>THIS IS AN IMPORTANT HEADING</strong>
                </p>
                <p className="fs-5">
                  AND THIS IS WHERE WE TALK ABOUT WHY WE’RE PRETTY AWESOME ...
                </p>
              </div>
            </div>
            <div className="d-flex wrapping-on-phone container-fuild d-flex justify-between center laptop-gap phone-gap border-top mt-2 py-4 ">
              <div className="w-100 text-start ">
                <img
                  className="w-100  rounded"
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                />
                <div className=" d-flex justify-content-center gap-3 py-4 px-1">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-person-lines-fill w-100 text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                    </svg>
                  </div>
                  <div className="px-2 py-1 w-100">
                    <h4>
                      <strong>HERE'S A HEADING</strong>
                    </h4>
                    <p>AND A SUBTITLE</p>
                  </div>
                </div>
                <div></div>
              </div>{" "}
              <div className="w-100 text-start ">
                <img
                  className="w-100  rounded"
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                />
                <div className=" d-flex justify-content-center gap-3 py-4 px-1">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-person-lines-fill w-100 text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                    </svg>
                  </div>
                  <div className="px-2 py-1 w-100">
                    <h4>
                      <strong>HERE'S A HEADING</strong>
                    </h4>
                    <p>AND A SUBTITLE</p>
                  </div>
                </div>
                <div></div>
              </div>{" "}
              <div className="w-100 text-start ">
                <img
                  className="w-100  rounded"
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                />
                <div className=" d-flex justify-content-center gap-3 py-4 px-1">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-person-lines-fill w-100 text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                    </svg>
                  </div>
                  <div className="px-2 py-1 w-100">
                    <h4>
                      <strong>HERE'S A HEADING</strong>
                    </h4>
                    <p>AND A SUBTITLE</p>
                  </div>
                </div>
                <div></div>
              </div>{" "}
            </div>

            <div className="pb-5 mb-3">
              <p>
                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                lectus. Praesent semper bibendum ipsum, et tristique augue
                fringilla eu. Vivamus id risus vel dolor auctor euismod quis
                eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam
                luctus mattis lectus sit amet pulvinar. Nam nec turpis.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* TWO DIV */}
      <div className="row w-88 pb-5 mb-5">
        <div className="col-md-6 justify-content-center">
          <div className=" px-5 text-center">
            <div className="row border-bottom pt-5 pb-2">
              <div className="col-md pb-3 pt-2">
                <p className="fs-3">
                  <strong> THIS IS AN IMPORTANT HEADING</strong>
                </p>
                <p className="fs-7">AND THIS IS WHERE WE TALK ABOUT WHY</p>
              </div>
            </div>
            <div className="row border-top mt-2 py-3"></div>

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
                    className="btn btn-md text-white px-5 py-3"
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
            <div className="row border-bottom pt-5 pb-2">
              <div className="col-md pb-3 pt-2">
                <p className="fs-3">
                  <strong>THIS IS AN IMPORTANT HEADING</strong>
                </p>
                <p className="fs-7">AND THIS IS WHERE WE TALK ABOUT WHY</p>
              </div>
            </div>
            <div className="row border-top mt-2 py-3"></div>

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
                    className="btn btn-md text-white px-5 py-3"
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
      {/* RECENT POST & SPOTLIGHT */}
      <div className="row w-88 laxz px-5 py-5">
        <div className="col-md-8">
          <div className="d-flex align-items-center">
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
            <div className="pt-2">
              <h3>
                <strong>RECENT POSTS</strong>
              </h3>
            </div>
          </div>
          <div className="row py-5 ">
            <div className="col-md-4">
              <img
                src="https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580"
                className="w-100"
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
                className="w-100"
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
                className="w-100"
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
            <div className="d-flex align-items-center pb-5">
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
              <div className="pt-2">
                <h3>
                  <strong>SPOTLIGHT</strong>
                </h3>
              </div>
            </div>

            <div className="card text-start spot-card ">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body laxz">
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
                    className="btn btn-md text-white px-5 py-3"
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
      {/* footer */}
      <div className="row p-5 bg-dark text-white boder-bottom pb-5">
        <div className="col-md-3">
          <div className="text-start ps-3 py-3 text-white">
            <div>
              <h3 className="text-white">
                <strong>FILLER LINKS</strong>
              </h3>
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
          <div className="text-start ps-3 py-3 text-white">
            <div>
              <h3 className="text-white">
                <strong>FILLER LINKS</strong>
              </h3>
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
            <div className="">
              <p>Quam turpis feugiat dolor</p>
            </div>{" "}
          </div>{" "}
          <div className="text-start ps-3 py-3 text-white">
            <div>
              <h3 className="text-white">
                <strong>FILLER LINKS</strong>
              </h3>
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
            <div className="">
              <p>Quam turpis feugiat dolor</p>
            </div>{" "}
          </div>
        </div>
        <div className="col-md-6">
          {" "}
          <div className="text-start ps-3 py-3 text-white">
            <div>
              <h3 className="text-white">
                <strong>FILLER LINKS</strong>
              </h3>
            </div>
            <div className="border-bottom text-white">
              <p>
                Hi! This is ZeroFour, a free, fully responsive HTML5 site
                template by AJ for HTML5 UP. It's Creative Commons Attribution
                licensed so use it for any personal or commercial project (just
                credit us for the design!).
              </p>
            </div>
            <div className="py-3">
              <button
                type="button"
                className="btn btn-md text-white px-5 py-3"
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
          </div>{" "}
          <div className="text-start ps-3 py-3 text-white">
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
                  <div className="col-6">
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
                  <div className="col-6">
                    <p>1234 Fictional Rd Nashville, TN 00000-0000 USA</p>
                    <p>(000) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-dark text-white p-5">
        © Untitled. All rights reservedDesign: HTML5 UPDemo Images: Unsplash
      </p>
    </div>
  );
}
