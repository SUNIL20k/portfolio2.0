import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chat from './images/Aichat.webp'
import Swiggy from './images/Swiggy.jpg'
import Youtube from './images/youtube.avif'
import Netflix from './images/netflix.png'


const Zero=()=>{
    return(
        <div className='work'>
        <div className='work-detail'>
                <h1>01</h1>
                <h3>Ai Img Chat-bot</h3>
                <p>To set a background color for an Express.js</p>
                <p>you need to serve an HTML page</p>
                <h4>React.js</h4>    
                <hr></hr>
                <div class="work-icons">
                <Link to='https://img-chat-bot.vercel.app/' className='link'>
                    <div class="icon-container bootstrap">
                        <span class="tooltip">Live project</span>
                        <i class="bi bi-arrow-up-right icon"></i>
                    </div>
                    </Link>
                    <Link to='https://github.com/SUNIL20k/Img-chat-Bot' className='link'>
                    <div class="icon-container github">
                        <span class="tooltip">Git Repository</span>
                        <i class="bi bi-github icon"></i>
                    </div>
                    </Link>
                </div>  
            </div>
            <div className='work-pics'>
                <img src={Chat}></img>
            </div>
            </div>    
    )
}
const One=()=>{
    return(
        <div className='work'>
        <div className='work-detail'>
                <h1>02</h1>
                <h3>Swiggy Clone</h3>
                <p>To set a background color for an Express.js</p>
                <p>you need to serve an HTML page</p>
                <h4>HTML5, CSS3, Javascript, React.js</h4>    
                <hr></hr>
                <div class="work-icons">
                <Link to='https://swiggy-amber.vercel.app/' className='link'>
                    
                    <div class="icon-container bootstrap">
                        <span class="tooltip">Live project</span>
                        <i class="bi bi-arrow-up-right icon"></i>
                    </div>
                    </Link>
                <Link to='https://github.com/SUNIL20k/swiggy' className='link'>
                    <div class="icon-container github">
                        <span class="tooltip">Git Repository</span>
                        <i class="bi bi-github icon"></i>
                    </div>
                    </Link>
                </div>  
            </div>
            <div className='work-pics'>
                <img src={Swiggy}></img>
            </div>
            </div>  
    )
}
const Two=()=>{
    return(
        <div className='work'>
        <div className='work-detail'>
                <h1>03</h1>
                <h3>Netflix Clone</h3>
                <p>To set a background color for an Express.js</p>
                <p>you need to serve an HTML page</p>
                <h4>HTML5, CSS3, Javascript</h4>    
                <hr></hr>
                <div class="work-icons">
                    <Link to='https://netflix-app-opal-sigma.vercel.app/' className='link'>
                    <div class="icon-container bootstrap">
                        <span class="tooltip">Live project</span>
                        <i class="bi bi-arrow-up-right icon"></i>
                    </div>
                    </Link>
                    <Link to='https://github.com/SUNIL20k/netflix-App' className='link'>
                    <div class="icon-container github">
                        <span class="tooltip">Git Repository</span>
                        <i class="bi bi-github icon"></i>
                    </div>
                    </Link>
                </div>  
            </div>
            <div className='work-pics'>
                <img src={Netflix}></img>
            </div>
            </div>  
    )
}
const Three=()=>{
    return(
        <div className='work'>
        <div className='work-detail'>
                <h1>04</h1>
                <h3>Youtube Clone</h3>
                <p>To set a background color for an Express.js</p>
                <p>you need to serve an HTML page</p>
                <h4>CSS3, Javascript, React.js</h4>    
                <hr/>
                <div class="work-icons">
                    <Link to='https://youtube-iota-flax.vercel.app/' className='link'>
                    <div class="icon-container bootstrap">
                        <span class="tooltip">Live project</span>
                        <i class="bi bi-arrow-up-right icon"></i>
                    </div>
                    </Link>
                    <Link to={'https://github.com/SUNIL20k/youtube'} className='link'>
                    <div class="icon-container github">
                        <span class="tooltip">Git Repository</span>
                        <i class="bi bi-github icon"></i>
                    </div>
                    </Link>
                </div>  
            </div>
            <div className='work-pics'>
                <img src={Youtube}></img>
            </div>
        </div>  
    )
}
const Work = () => {
    const [count,setCount]=useState(0)
    const Next=()=>{
        if(count===0){
            return <Zero/>
        } else if(count===1){
            return <One/>
        } else if(count===2){
            return <Two/>
        } else if(count===3){
            return <Three/>
        } else {
            return <Three/>
        }
    }
    const Increase=()=>{
        if(count<4){
            setCount((prevCount) => (prevCount >= 3 ? 0 : prevCount + 1))
        }
    }
    const Decrease=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return (
        <div className='Work'>
            <div >
            {Next()}
            </div>
            <div className='btn-nxt'>
                    <button onClick={Decrease}><i class="bi bi-chevron-left"></i></button>
                    <button onClick={Increase}><i class="bi bi-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Work
