import React from 'react'

const Skills = () => {
  return (
    <div className='Content'>

      <div>
        <h1  className='headerFont'>Technical Skills</h1>
        <div className='SkillTypes'>
          <p className='Type'><strong>5</strong> Languages</p>
          <p className='Type'><strong>6</strong> Frameworks/ libraries</p>
          <p className='Type'><strong>2</strong> Databases</p>
          <p className='Type'><strong>7</strong> Tools</p>
        </div>
      </div>

      <div className='Scontent'>

        <div className='SColumn'>
          <p className='SCSkill Language'>Python</p>
          <p className='SCSkill Language'>JavaScript</p>
          <p className='SCSkill Language'>C#</p>
          <p className='SCSkill Language'>HTML</p>
          <p className='SCSkill Language'>CSS</p>
          <p className='SCSkill Language'>SQL</p>
        </div>

        <div className='SColumn'>
          <p className='SCSkill Framework'>Flask</p>
          <p className='SCSkill Framework'>Jinja2</p>
          <p className='SCSkill Framework'>React</p>
          <p className='SCSkill Framework'>Express</p>
          <p className='SCSkill Framework'>Bootstrap</p>
          <p className='SCSkill Framework'>Tailwind</p>
        </div>
        
        <div className='SColumn'>
          <p className='SCSkill Database'>MYSQL</p>
          <p className='SCSkill Database'>MongoDB</p>
        </div>

        <div className='SColumn'>
          <p className='SCSkill Tool'>AJAX</p>
          <p className='SCSkill Tool'>RESTful API</p>
          <p className='SCSkill Tool'>JSON</p>
          <p className='SCSkill Tool'>PostMan</p>
          <p className='SCSkill Tool'>AWS</p>
          <p className='SCSkill Tool'>Git</p>
          <p className='SCSkill Tool'>Github</p>
        </div>

      </div>

    </div>
  )
}

export default Skills