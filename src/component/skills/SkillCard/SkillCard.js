import React from 'react'
import "./SkillCard.css"

export default function SkillCard({title , iconURL, isActive, onClick}) {
  return (
    <div
     className={`skills_card ${isActive ? "active":""}`}
     onClick={onClick}
     >
        <div className="skill_icon">
            <img src={iconURL} alt={title} />
        </div>


        <span>{title}</span>
    </div>
  )
}
