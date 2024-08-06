import React, {useEffect} from 'react'
import "./ProjectDetails.css"

const ProjectDetails = ({details}) => {

  return (
    <section className='Project_section' >
        <div className="pic">
            <img className='pic-img' src={details.pic} alt="project" />
        </div>
        <div className="Project_content">
            <h3>{details.title}</h3>
            <button><a target="_blank" href={details.link}>{details.buttons}</a></button>
        </div>

    </section>
  )
}

export default ProjectDetails
