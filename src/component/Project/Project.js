import React, { useRef, useEffect } from "react";
import { PROJECT } from "../utils/data";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Slider from "react-slick";
import "./Project.css";

const Projects = () => {
  const slideRef = useRef();

  useEffect(() => {
    console.log("Projects component rendered");
  });

  const settingss = React.useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 777,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <div id="project" className="first_container">
        <h2 className="ProjectTitle">Projects</h2>
        <div className="content_container">
          <Slider ref={slideRef} {...settingss}>
            {PROJECT.map((item, index) => (
              <div key={index}>
                <ProjectDetails details={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Projects;
