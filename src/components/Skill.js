import React from 'react'

const Skill = () => {
  return (
    <div className='exp'>
      <h1>My Skills</h1>
      <p>To achieve the effect where the icon changes when you</p>
      <p>hover over it</p>
      <div className='skill'>
        <div className='icon-container html'>
          <span className='tooltip'>HTML5</span>
          <i className='fa-brands fa-html5 icon'></i>
        </div>
        <div className='icon-container css'>
          <span className='tooltip'>CSS3</span>
          <i className='fa-brands fa-css3 icon'></i>
        </div>
        <div className='icon-container js'>
          <span className='tooltip'>JavaScript</span>
          <i className='fa-brands fa-js icon'></i>
        </div>
        <div className='icon-container react'>
          <span className='tooltip'>React</span>
          <i className='fa-brands fa-react icon'></i>
        </div>
        <div className='icon-container node'>
          <span className='tooltip'>Node.js</span>
          <i className='fa-brands fa-node icon'></i>
        </div>
        <div className='icon-container node'>
          <span className='tooltip'>Express</span>
          <i className='fa-brands fa-node-js icon'></i>
        </div>
        <div className='icon-container leaf'>
          <span className='tooltip'>MongoDB</span>
          <i className='fa-solid fa-leaf icon'></i>
        </div>
        <div className='icon-container bootstrap'>
          <span className='tooltip'>Bootstrap</span>
          <i className='fa-brands fa-bootstrap icon'></i>
        </div>
      </div>
    </div>
  )
}

export default Skill
