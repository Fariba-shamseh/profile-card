import Skill from "./Skill.jsx";

export default function Skillist({mySkill}){
    return(
        <div>
            {mySkill.map((obj, id) => <Skill key={id} skill={obj.skill} level={obj.level} color={obj.color}/>)}
        </div>
    )
}