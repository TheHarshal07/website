import React, {useState} from "react";
import { Skills } from "../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillinfoCard from "./SkillsInfo/SkillinfoCard";
import "./skills.css";


export default function skills() {
  // eslint-disable-next-line
  const [selectSkills, setSelectSkills] = useState(Skills[0])

  const handleSelectSkill = (data)=>{
    setSelectSkills(data)
  }

  return (
    <>
      <section className="skill_section">
          <h3 className="heading">Techinal proficiency</h3>
        <div className="skill_content">
          <div className="skills">
            {Skills.map((item) => (
              <SkillCard
                key={item.title}
                iconURL={item.icon}
                title={item.title}
                isActive={selectSkills.title === item.title}
                onClick={() =>{
                  handleSelectSkill(item)
                }}
              />
            ))}
          </div>

          <div className="skill_info">
            <SkillinfoCard
            heading={selectSkills.title}
            skills={selectSkills.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
}
