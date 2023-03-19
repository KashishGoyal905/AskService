import React, {useState} from 'react';
import './register.css';

const Register = () =>{
    const [user,setUser] = useState({
        name: "",
        email: "",
        password:"",
        confirmPassword:"",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return(
        <div className='register'>
             <h1>Register</h1>
             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button"  >Register</div>

            {/* <div className='button'>register</div> */}
        </div>
    )
}
export default Register

