import React from "react";
import authorPhoto from "../../Assets/Images/authorPhoto.png";
import "./AboutSection.scss";

function AboutSection(props) {
  return (
    <div className="about">
      <h2 className="about__title" id="about_me">About Me</h2>
      <div className="about__image-container">
        <img
          className="about__image"
          src={authorPhoto}
          alt="Photo of the author"
        />
      </div>
      <div className="about__details-container">
        <div className="about__details-subContainer">
          <h3 className="about__details-title">Pronouncing my Name</h3>
          <p className="about__details">"uh"-"geet" [Geet rhymes with seat]</p>
        </div>

        <div className="about__details-subContainer">
          <h3 className="about__details-title">Career Goals</h3>
          <ol className="about__details-list">
            <li className="about__details-listItem">
              Become a software developer/engineer
            </li>
            <li className="about__details-listItem">
              Become a team lead/project manager
            </li>
            <li className="about__details-listItem">Build my own Startup</li>
            <li className="about__details-listItem">???</li>
            <li className="about__details-listItem">Profit</li>
          </ol>
        </div>

        <div className="about__details-subContainer">
          <h3 className="about__details-title">Hobbies</h3>
          <p className="about__details">
            Video Games, Listening to music, Trivia (especially history)
          </p>
        </div>

        <div className="about__details-subContainer">
          <h3 className="about__details-title">Awards and Honors</h3>
          <ol className="about__details-list">
            <li className="about__details-listItem">
              <span>Just Desserts:</span> Nominated by the student society as
              the student who contributed the most to the faculty (Role:
              Vice-President, Finance of the UBC Commerce Undergraduate Society
              Year: 2019)
            </li>
            <li className="about__details-listItem">
              <span>Dean's Honor Roll (3x):</span> Awarded to students who
              completed the academic year with an 80% average or higher
            </li>
            <li className="about__details-listItem">
              <span>Brainstation x Mastercard Hackathon (Winner):</span> Awarded
              to the team that presented the most viable solution for the
              problem (an accessible and effective security solution for payment
              verification){" "}
            </li>
          </ol>
        </div>

        <div className="about__details-subContainer">
          <h3 className="about__details-title">Quote that defines me</h3>
          <p className="about__details about__details--quote">"Fall Seven Times and Get Up Eight"</p>
        </div>

        <div className="about__details-subContainer">
          <h3 className="about__details-title">Favorites</h3>
          <div className="about__favorites-container">
            <div className="about__favorites-subContainer">
              <div className="about__favorites-grid">
                <h4 className="about__favorites-title">
                  <span>Band:</span>
                </h4>
                <p className="about__favorites">
                  <a>CHVRCHES</a>
                </p>
                <h4 className="about__favorites-title">
                  <span>Game:</span>
                </h4>
                <p className="about__favorites">
                  <a>Red Dead Redemption 2</a>
                </p>
                <h4 className="about__favorites-title">
                  <span>TV Series:</span>
                </h4>
                <p className="about__favorites">
                  <a>Band of Brothers</a>
                </p>
              </div>
              <div className="about__favorites-grid">
                <h4 className="about__favorites-title">
                  <span>Movie:</span>
                </h4>
                <p className="about__favorites">
                  <a>Kingdom of Heaven</a>
                </p>
                <h4 className="about__favorites-title">
                  <span>Book:</span>
                </h4>
                <p className="about__favorites">
                  <a>A Clash of Kings</a>
                </p>
                <h4 className="about__favorites-title">
                  <span>Food:</span>
                </h4>
                <p className="about__favorites">
                  <a>Chocolate Ice Cream</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
