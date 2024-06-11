import React, { useState } from 'react'
import { useEffect } from 'react';
import picture from './images/satoru-gojo-black-3840x2160-14684.png'

const Home = () => {
  const [exp, setExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [commits, setCommits] = useState(0);
  const [time, setTime] = useState(`${new Date().getHours()} : ${new Date().getMinutes()}`)

  const expTarget = 5;
  const projectsTarget = 10;
  const technologiesTarget = 6;
  const commitsTarget = 100;

  useEffect(() => {
    let expCount = 0;
    let projectsCount = 0;
    let technologiesCount = 0;
    let commitsCount = 0;

    const generalInterval = setInterval(() => {
      if (expCount < expTarget) {
        expCount += 1;
        setExp(expCount);
      }

      if (projectsCount < projectsTarget) {
        projectsCount += 1;
        setProjects(projectsCount);
      }

      if (technologiesCount < technologiesTarget) {
        technologiesCount += 1;
        setTechnologies(technologiesCount);
      }

      if (expCount === expTarget && projectsCount === projectsTarget && technologiesCount === technologiesTarget) {
        clearInterval(generalInterval);
      }
    }, 200);

    const commitsInterval = setInterval(() => {
      if (commitsCount < commitsTarget) {
        commitsCount += 1;
        setCommits(commitsCount);
      } else {
        clearInterval(commitsInterval);
      }
    }, 30);

    return () => {
      clearInterval(generalInterval);
      clearInterval(commitsInterval);
    };
  }, []);

  const onChangeName = (e) => {
    // /^(?:[01]\d|2[0-3]):[0-5]\d$/
    const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/
    // Test the input against the regular expression
    if (regex.test(e.target.value)) {
      // setTime(e.target.value)
      console.log('if')
    }
    setTime(e.target.value)


  }
  return (
    <div className='Home' >
      <div className='Home2'>
        <div className='home-profile'>
          <p>Software developer</p>
          <h1>Hello I'm <span>Sunil Kumar</span></h1>
          <p>I excel at crafting elegent digital experiences and</p>
          <p>I am proficient in verious Programing languages and </p>
          <p>technologies</p>
          <div className='download-btn'>
            <button className='btn-btn'>Download CV <i class="bi bi-download"></i></button>
            <div className='icons'>
              <i class="bi bi-github"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-whatsapp"></i>
              <i class="bi bi-twitter"></i>
            </div>
          </div>
        </div>
        <div className='picture'>
          <img src={picture}></img>
        </div>
      </div>
      <div className='detail-num'>
        <div className='num'>
          <h1>{exp}</h1>
          <p>years of <br></br>experiences</p>
        </div>
        <div className='num'>
          <h1>{projects}</h1>
          <p>projects <br></br>completed</p>
        </div>
        <div className='num'>
          <h1>{technologies}</h1>
          <p>technologies <br></br>mastered</p>
        </div>
        <div className='num'>
          <h1>{commits}</h1>
          <p>code <br></br>commits</p>
        </div>
      </div>
    </div>
  )
}

export default Home
