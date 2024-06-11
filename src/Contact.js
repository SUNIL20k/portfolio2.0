import React, { useState } from 'react'
import { useRef } from 'react'

const Contact = () => {
    const [res, setRes] = useState('')
    const [color, setColor] = useState('')
    const FirstNameRef = useRef()
    const LastNameRef = useRef()
    const EmailRef = useRef()
    const PhoneNoRef = useRef()
    const DomainRef = useRef()
    const MsgRef = useRef()
    function Submit() {
        const First = FirstNameRef.current.value
        const Last = LastNameRef.current.value
        const Email = EmailRef.current.value
        const Phone = PhoneNoRef.current.value
        const Domain = DomainRef.current.value
        const Msg = MsgRef.current.value
        let object = {
            first: First,
            last: Last,
            email: Email,
            phone: Phone,
            domain: Domain,
            msg: Msg
        }
        if (First === '', Last === '', Email === '', Phone === '', Domain === '', Msg === '') {
            setRes('plase enter input fileds')
            setColor('red')
            setTimeout(() => {
                setRes('')
            }, 4000)
        } else {
            fetch(`https://portfolio-9daa0-default-rtdb.firebaseio.com/portfolio.json`, {
                method: 'Post',
                body: JSON.stringify(object)
            }).then(() => {
                setColor('rgb(0, 241, 32)')
                setRes('Msg Sent Successfully')
                setTimeout(() => {
                    setRes('')
                }, 4000)
                FirstNameRef.current.value = '';
                LastNameRef.current.value = '';
                EmailRef.current.value = '';
                PhoneNoRef.current.value = '';
                DomainRef.current.value = '';
                MsgRef.current.value = '';
            }).catch(() => console.log('error'))
        }
    }
    return (
        <div className='contact'>
            <div className='input'>
                <h1>Let's Work Together</h1>
                <p>my skills and enthusiasm to your team</p>
                <p>enthusiasm to your team</p>
                <div className='input-field'>
                    <input type='text' placeholder='First name' ref={FirstNameRef}></input>
                    <input type='text' placeholder='Last name' ref={LastNameRef}></input>
                    <input type='text' placeholder='Email' ref={EmailRef}></input>
                    <input type='text' placeholder='Phone no' ref={PhoneNoRef}></input>
                </div>
                <div className='text-area'>
                    <select class="form-select select" aria-label="Default select example" ref={DomainRef}>
                        <option selected>Select a Service</option>
                        <option value="1">Frontend</option>
                        <option value="2">Backend</option>
                        <option value="3">Mern Full stack development</option>
                    </select>
                    <textarea placeholder='Type your msg here.' ref={MsgRef}></textarea>
                </div>
                <button onClick={Submit}>Submit</button>
                {res && <p style={{ color: color }}>{res}</p>}
            </div>
            <div className='details'>
                <div className='personal-info'>
                    <i class="bi bi-telephone-fill"></i>
                    <div>
                        <p>Phone</p>
                        <p>8309615330</p>
                    </div>
                </div>
                <div className='personal-info'>
                    <i class="bi bi-envelope-fill"></i>
                    <div>
                        <p>Email</p>
                        <p>Sunilkumar2001.n@gmail.com</p>
                    </div>
                </div>
                <div className='personal-info'>
                    <i class="bi bi-geo-alt-fill"></i>
                    <div>
                        <p>Address</p>
                        <p>Bangalore, Karnataka</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
