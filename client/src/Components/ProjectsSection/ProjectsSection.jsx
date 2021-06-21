import React from "react";
import "./ProjectsSection.scss";
import ybLogo from "../../Assets/Logo/yb-logo.png";
import inStock from "../../Assets/Images/instockImage.png";
import brainFlix from "../../Assets/Images/brainflixImage.png";

function ProjectsSection(props) {
  return (
    <div className="projects">
      <h2 className="projects__main-title">PROJECT SHOWCASE</h2>
      <div className="projects__showcase">
        <div className="projects__container">
          <img className="projects__logo" src={ybLogo} alt="project logo" />
          <div className="projects__content-container">
            <h3 className="projects__content-title">ya-Bento</h3>
            <p className="projects__description">
              ya-Bento is A MERN (Full stack), fully responsive food service
              Application with full CRUD functionality, integrated with MongoDB
              Atlas, Stripe payment integration, and Firebase user
              authentication. I plan to continue working on the project after I
              have fleshed out my portfolio.
            </p>
            <p className="projects__description">
              Additional features I plan to add include using an Open Maps API
              to identify delivery location as well as push notifications when a
              delivery time is approaching.
            </p>

            <div className="projects__link-container">
              <a
                className="projects__link"
                href="https://github.com/ajit-mathew-joseph/ya-bento-v1.1"
              >
                Project Link
              </a>
            </div>
          </div>

          <div className="projects__container">
            <img
              className="projects__image"
              src={inStock}
              alt="a brief showcase of the project"
            />
            <div className="projects__content-container">
              <h3 className="projects__content-title">InStock</h3>
              <p className="projects__description">
                InStock was a group project as part of the BrainStation
                bootcamp. We had 1 week to build a clone of a inventory
                management system for a Fortune 500 company. The project tasks
                were subdivided between the group and including full CRUD
                functionality as well as responsive design.
              </p>

              <p className="projects__description">
                The project involved working on a common Git repo as well as
                task tracking using JIRA and daily standups. My role in the
                project was working on the back-end (implementing POST and ADD
                features as well as front/back-end validation). I also worked on
                bug fixes.
              </p>
            </div>

            <div className="projects__link-container">
              <a
                className="projects__link"
                href="https://github.com/sean35mm/ari-instock"
              >
                Project Link
              </a>
            </div>
          </div>

          <div className="projects__container">
            <img
              className="projects__image"
              src={brainFlix}
              alt="a brief showcase of the project"
            />
            <div className="projects__content-container">
              <h3 className="projects__content-title">BrainFlix</h3>
              <p className="projects__description">
                BrainFlix is a YouTube clone that was completed as part of the
                BrainStation bootcamp. This was the first project where we used
                React as well as Node.js, and the tasks were split over 3x 1
                week sprints.
              </p>
              <p className="projects__description">
                The main features are an API to retrieve video data as well as
                filtering the results from the GET API.
              </p>
            </div>

            <div className="projects__link-container">
              <a
                className="projects__link"
                href="https://github.com/ajit-mathew-joseph/ajit-joseph-brainflix"
              >
                Project Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
