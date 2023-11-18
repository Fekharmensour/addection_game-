import React, { useState } from "react";
import * as Components from './Components';
import './../styling/sign.css';
import { BiSolidError } from 'react-icons/bi' ;

function Sign() {
    const [signIn, toggle] =useState(true);
    const [email , setemail] = useState("")
    const [pass , setPass] = useState("")
  

    function affiche_error() {
       
        const errors = [];

        if (email === "") {
            errors.push(<p className="error"><BiSolidError/> <span>Email must be required</span></p>);
            return errors;
        }
          
        if (pass.length < 8) {
            errors.push(
                <p className="error"> <BiSolidError/> &nbsp; <span>Password must be more than 8 characters</span></p>
            );
            return errors;
        }
    
        return errors;
    }




 return(
    <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Error>
                {affiche_error("sign")}
            </Components.Error>
            <Components.Input type='email' placeholder='Email' onChange={(e)=>{setemail(e.target.value)}} value={email} />
            <Components.Input type='password' placeholder='Password' onChange={(e)=>{setPass(e.target.value)}} value={pass} />
            <Components.Button>Sigin In</Components.Button>
        </Components.Form>
    </Components.SignInContainer>
 )
}
export default Sign;