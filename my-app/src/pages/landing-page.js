import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function LandingPage() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div class="container px-4">
          <a class="navbar-brand" href="#page-top">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Feedback
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="bg-primary bg-gradient text-black">
        <div class="container px-4 text-center">
          <h1 class="fw-bolder">Welcome to Georgian Code Club</h1>
        </div>
      </header>
      {/* About */}
      <article class="container gap-3">
        <div class="row p-5">
          <div class="col-sm">{/* Empty block */}</div>
          <div class="col-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.One of three columns
          </div>
        </div>
      </article>
      <article class="container px-4">
        <div class="row p-5">
          <div class="col-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.One of three columns
          </div>
          <div class="col-sm">{/* Empty block */}</div>
        </div>
      </article>
      <article class="container px-4">
        <div class="row p-5">
          <div class="col-sm">{/* Empty block */}</div>
          <div class="col-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.One of three columns
          </div>
        </div>
      </article>
    </div>
  );
}

export default LandingPage;
