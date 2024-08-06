import React, { useRef } from 'react'
import "./work_experience.css"
import { WORK_EXPERIENCE } from '../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick"
import 'boxicons'

const Work_experience = () => {
  const slideRef = useRef(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
      {
        breakpoint: 760,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  const slideright = () =>{
    slideRef.current.slickNext();
  }
  const slideleft = () =>{
    slideRef.current.slickPrev();
  }


  return (
    <section id="experience" className='work_experience_card'>
        <h1 className='head'>Work Experience</h1>

        <div className="work_experience_content">
          <div className="arrow_left" onClick={slideleft}>
          <box-icon name='chevron-left' color='#ffff' ></box-icon>
          </div>
          <div className="arrow_right" onClick={slideright}>
          <box-icon name='chevron-right' color='#ffff' ></box-icon>
          </div>
        <Slider  ref={slideRef} {...settings}>
        {WORK_EXPERIENCE.map((item)=>(
            <ExperienceCard details={item} />
        ))}
      </Slider>
        </div>

    </section>
  )
}

export default Work_experience
