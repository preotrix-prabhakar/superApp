import React from 'react'
import concertImage from "../assets/image 13.jpg"
import styles from '../components/register.css'
function Register() {
    // const [formData,setFormdata]={
    //     name:"",
    //     username:"",
    //     email:"",
    //     tel:""
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }

    const handleInput=()=>{

    }
    return (
        <>
            <div>
                <div className="main">
                    <div className="left">
                       
                       <img src={concertImage} alt="" srcset="" />
                    </div>
                    <div className="right">
                        <div className="heading">
                            <h1>Super app</h1>
                            <p>Create your new account</p>
                        </div>
                        <div className="fields">
                            <input type="text" placeholder='Name' onChange={handleInput} />
                            <input type="text" placeholder='UserName' onChange={handleInput}/>
                            <input type="email" placeholder='Email' onChange={handleInput} />
                            <input type='tel' placeholder='Mobile' onChange={handleInput} />

                        </div>
                            <div className="last">
                            <input type="checkbox" name="" id="checkbox" />
                            <p>Share my registeration data with Superapp</p>
                            
                            </div>
                            <button type="submit" onClick={handleSubmit}>SIGN UP</button>
                        <div className="condition">
                            
                            <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span> </p>
                            
                            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
                            
                        </div>
                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
