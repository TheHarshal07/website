import React from "react";
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
          <h1 className="about_section">About me</h1>
          <span className="about_subtitle">My indroduction</span>
        </div>

        <div className="about_container_main">
          <img src={AboutImg} alt="About pic" />

          <div className="about_data">
            <Info />
            <p className="about_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dignissimos quo aliquid delectus doloribus quod. Voluptatum
              consequuntur, neque quidem magni sunt non fuga tempore blanditiis
              dolorum corporis, incidunt ab nostrum.
            </p>

            <Stack spacing={2} direction="row" className="btn">
              <Button variant="outlined">
                <a download="" href={CV}>
                  Download
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
}
