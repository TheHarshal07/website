import React, {userRef} from 'react'
import "./work_experience.css"
import { WORK_EXPERIENCE } from '../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick"

const work_experience = () => {
  // const slideRef = userRef();
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


  return (
    <section className='work_experience_card'>
        <h1 className='head'>Work Experience</h1>

        <div className="work_experience_content">
        <Slider  {...settings}>
        {WORK_EXPERIENCE.map((item)=>(
            <ExperienceCard key={item.title} details={item} />
        ))}
      </Slider>
        </div>

    </section>
  )
}

export default work_experience
