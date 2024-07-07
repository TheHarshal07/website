import React from "react";
import "./SkillinfoCard.css";

const SkillinfoCard = ({ heading, skills }) => {
  return (
    <div className="Skill_info_card">
      <h3>{heading}</h3>

      <div className="skill_info_content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill_info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill_progress_bar">
              <div
                className="skill_progress"
                style={{ width: item.percentage }}
              ></div>
            </div>

          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillinfoCard;
