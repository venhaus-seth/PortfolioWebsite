import React from 'react'

const Skills = () => {
  return (
    <div className='Content'>

      <div>
        <h1  className='headerFont'>My Skills</h1>
        <div className='SkillTypes'>
          <p className='Type'><strong style={{color: "rgb(189, 5, 5)"}}>5</strong> Languages</p>
          <p className='Type'><strong style={{color: "rgb(16, 13, 176)"}}>6</strong> Frameworks/libraries</p>
          <p className='Type'><strong style={{color: "rgb(59, 144, 2)"}}>2</strong> Databases</p>
          <p className='Type'><strong style={{color: "orange"}}>7</strong> Tools</p>
        </div>
      </div>
      
      <div className='SContent'>
        <p className='SCSkill Language'>Python</p>
        <p className='SCSkill Language'>JavaScript</p>
        <p className='SCSkill Language'>C#</p>
        <p className='SCSkill Language'>HTML</p>
        <p className='SCSkill Language'>CSS</p>
        <p className='SCSkill Language'>SQL</p>
        <p className='SCSkill Framework'>Flask</p>
        <p className='SCSkill Framework'>Jinja2</p>
        <p className='SCSkill Framework'>React</p>
        <p className='SCSkill Framework'>Express</p>
        <p className='SCSkill Framework'>Bootstrap</p>
        <p className='SCSkill Framework'>Tailwind</p>
        <p className='SCSkill Database'>MYSQL</p>
        <p className='SCSkill Database'>MongoDB</p>
        <p className='SCSkill Tool'>AJAX</p>
        <p className='SCSkill Tool'>RESTful API</p>
        <p className='SCSkill Tool'>JSON</p>
        <p className='SCSkill Tool'>PostMan</p>
        <p className='SCSkill Tool'>AWS</p>
        <p className='SCSkill Tool'>Git</p>
        <p className='SCSkill Tool'>Github</p>

      </div>
    </div>
  )
}

export default Skills