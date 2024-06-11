import React, { useState } from 'react'
import Experience from './components/experience'
import Education from './components/education'
import Skill from './components/Skill'
import AboutMe from './components/AboutMe'
import './css/app.css'

const Resume = () => {
    const [content,setContent]=useState('Experience')
    const renderContent = () => {
        switch (content) {
          case 'Experience':
            return <Experience />;
          case 'Education':
            return <Education />;
          case 'Skills':
            return <Skill />;
          case 'AboutMe':
            return <AboutMe />;
          default:
            return <Experience />;
        }
      };
  return (
    <div className='Home'>
         <div className='Resume'>
            <div className='res-box'>
                 <h1>Why hire me</h1>
                 <p>To achieve the effect where the </p>
                 <p>icon,changes when hover it</p>
                 <div className='res-btn'>
                    <button onClick={() => setContent('Experience')} className={content === 'Experience' ? 'active' : ''}>Experience</button>
                    <button onClick={() => setContent('Education')} className={content === 'Education' ? 'active' : ''}>Education</button>
                    <button onClick={() => setContent('Skills')} className={content === 'Skills' ? 'active' : ''}>Skills</button>
                    <button onClick={() => setContent('AboutMe')} className={content === 'AboutMe' ? 'active' : ''}>About me</button>
                 </div>
            </div>
            <div className='res-box2'>
                {renderContent()}
            </div>
         </div>
    </div>
  )
}

export default Resume
