import './Skill.css'
export default function Skill({skill,level,color}){
    return(
        <div style={{background:color}} className='skill'>
            <span>{skill}</span>
            <span>{level==='Advanced' && '💪'}</span>
            <span>{level==='Medium' && '😊'}</span>
            <span>{level==='begiiner' && '👶'}</span>
        </div>
    )
}