import { useState } from "react";
import MainSection from "./MainSection";

export default function Login(){


    const [loginData,setLoginData] = useState(
        {
            name:"",
            password:""
        }
    );

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setLoginData({...loginData,[name]:value})
    }
     const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(loginData)
     }

    return(
        <MainSection>
            <div className="container-fluid fullscreen">
                <div className="container df center">
                    <form onSubmit={handleSubmit} className="login df center wrap">
                        <h1>Log in</h1>
                        <input type="text" placeholder="Enter name" name="name" onChange={handleChange} /><br />
                        <input type="password" name="password" placeholder="Enter password" onChange={handleChange} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </MainSection>
    )
}