import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

 

        <div className="about__content">
          
    
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit
            aut, incidunt ratione ad atque voluptates possimus at, nobis
            delectus rem accusamus doloribus voluptatum repellat. Iusto aliquid
            corporis nam suscipit!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
      
      </div>
    </section>
  );
};

export default About;
