import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    fname:"",
    lname:"",
    contact:"",
    fammems:""
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Form submitted', user);
    try {
        const response = await axios.post("http://localhost:8000/api/create", user);
        console.log('Response:', response);
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
    } catch (error) {
        console.error('Error:', error);
    }
  }



  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new Customer</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            
                <label htmlFor="contact">Contact</label>
                <input type="contact" onChange={inputHandler} id="contact" name="contact" autoComplete='off' placeholder='Contact' />
      
                <label htmlFor="fammems">No. of family members</label>
                <input type="fammems" onChange={inputHandler} id="fammems" name="fammems" autoComplete='off' placeholder='fammems' />
 
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add