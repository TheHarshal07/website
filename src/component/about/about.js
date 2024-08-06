import React, { useState } from "react";
import AboutImg from "../assets/Hero_pic.jpg";
import Info from "./info";
import CV from "../assets/Harshal_Bhogal.pdf";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./about.css";

export default function about() {
  return (
    <>
      <section className="about_section" id="about">
        <div className="data">
          <h1 >About me</h1>
          <span className="about_subtitle">I am Harshal Bhogal. I am living in kharghar, I have completed my both HSC and SSC from Aspee Vidyalaya Uchat.
          I have completed my Bachelores degree in Information Technology in Saraswati college of engineering, Kharghar.</span>
        </div>

        <div className="about_container_main">
          <img src={AboutImg} alt="About pic" />

          <div className="about_data">
            <Info />
            <p className="about_description">
            Skilled in C, Java, Python, HTML, CSS, JavaScript, React, MySQL, Git, and Docker. Known for strong teamwork, adaptability, and creativity. Committed to delivering exceptional work and meeting deadlines. Eager to leverage my skills and contribute to a dynamic team.
            </p>

            <Stack spacing={2} direction="row" className="btn">
              <Button variant="outlined">
                <a  download="" href={CV}>
                  Download Resume 
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
}
