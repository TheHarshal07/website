import React from 'react'
import "./ExperienceCard.css"

const ExperienceCard = ({details}) => {
  return (
    <section className='experience_card_details'>
        <h3>{details.title}</h3>

        <div className="experience_date">{details.date}</div>

        <ul>

        {details.responsibility.map((item)=>(
            <li key={item}>{item}</li>
        ))}
        </ul>

    </section>
  )
}

export default ExperienceCard
