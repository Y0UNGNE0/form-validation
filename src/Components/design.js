import React from "react";
import log from "./ggg/image.jpg";
import Footer from "./footer";
import Spot from "./spot";
import Twodiv from "./twodiv";

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
          <div className="sizx justify-content-center align-content-center align-items-end pb-5">
            {" "}
            <div className="row border-bottom pb-5 ">
              <div className="col-md h-25"></div>
            </div>{" "}
            <div className="row hopi border-top py-5 border-bottom ">
              {" "}
              <div className="col">
                {" "}
                <h2 className=" text-colour">
                  <strong>
                    {" "}
                    ZEROFOUR: A FREE RESPONSIVE SITE TEMPLATE BUILT ON HTML5 AND
                    CSS3 BY HTML5 UP{" "}
                  </strong>
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row border-top">
              <div className="col py-5">
                <div className="row">
                  <div className="col-md-8 pe-2">
                    {" "}
                    <h4 className=" text-center text-colour ">
                      DOES THIS STATEMENT MAKE YOU WANT TO CLICK THE BIG SHINY
                      BUTTON?
                    </h4>
                  </div>
                  <div className="col-md-4 cen">
                    <div className=" text-center">
                      <button
                        type="button"
                        className="text-white px-5 py-3 button"
                        style={buttonStyle}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
      </div>
      <Twodiv />
      <Spot />
      <Footer />
    </div>
  );
}
