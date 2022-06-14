import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ProjectsContainer} from './LandingPageElements';

import PlaceHolder from '../../place-holder.png'

var String1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting '
function ProjectDisplay(props){
    return(
        <ProjectsContainer className="container gap-3">
        <div className="row p-5">
          <div className="col-sm">{props.image}</div>
          <div className="col-sm">
            {props.text}
          </div>
        </div>
      </ProjectsContainer>
    );
};

function LandingPage() {
  return (
    <div>

      <nav
        className="navbar navbar-expand-lg navbar-dasdrk bg-dark fixed-top"
        id="mainNav">

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
            aria-label="Toggle navigation"></button>

            <span className="navbar-toggler-icon"></span>
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
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
      <ProjectDisplay text = {String1} image = {PlaceHolder} />
    </div>
  );
};

export default LandingPage;
