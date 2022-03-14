import React from "react";
import "./About.css";


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="about__content">
        <p>
          I am currently a student at the College of Charleston pursuing a major
          in Computer Science and a minor in Data Science. Outside of Computer
          Science, I am also very interested in Linguistics, specifically Second
          Language Acquisition Theory. I have previously served as a Computer
          Science Department Student Ambassador and I am now serving as a School
          of Sciences and Mathematics Student Ambassador. I have worked on three
          different research projects so far. The current project I am working
          on is my year-long research with Dr. Ellie Lovelette titled "Design
          and Implementation of a Language Learning Application Utilizing
          Comprehensible Input". I enjoy connecting with like-minded individuals,
          if this is you, please free free to reach out to me so we can talk
          more.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
