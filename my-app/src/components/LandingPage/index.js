import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {PorjectsContainer} from './LandingPageElements';
import PlaceHolder from '../../place-holder.png'

var String1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting '
function ProjectDisplay(props){
    return(
        <PorjectsContainer class="container gap-3">
        <div class="row p-5">
          <div class="col-sm">{props.image}</div>
          <div class="col-sm">
            {props.text}
          </div>
        </div>
      </PorjectsContainer>
    )
}

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
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
    </div>
  );
}

export default LandingPage;
