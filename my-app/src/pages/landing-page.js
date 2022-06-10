import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function LandingPage() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div className="container px-4">
          <a className="navbar-brand" href="#page-top">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-primary bg-gradient text-black">
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">Welcome to Georgian Code Club</h1>
        </div>
      </header>
      {/* About */}
        <div className="container gap-3">
            <div className="row p-5">
                <div className="col-sm">
                    {/* Empty block */}
                </div>
                <div className="col-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.One of three columns
                </div>
            </div>
        </div>
                <div className="container px-4">
            <div className="row p-5">
                <div className="col-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.One of three columns
                </div>
                <div className="col-sm">
                {/* Empty block */}
                </div>
            </div>
        </div>
                <div className="container px-4">
            <div className="row p-5">
                <div className="col-sm">
                    {/* Empty block */}
                </div>
                <div className="col-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.One of three columns
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
