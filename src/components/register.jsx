import React, { useState } from "react";
import * as Components from './Components';
import './../styling/sign.css'
import {FaUserInjured , FaUserTie } from 'react-icons/fa'
import {LiaToggleOffSolid } from 'react-icons/lia'
import { BsToggleOn } from 'react-icons/bs'
import { BiSolidError } from 'react-icons/bi'
import Sign from "./Signin";


function Register()  {
    const [signIn, toggle] =useState(true);
    const [patient , setpatient]= useState(false);
    const [doctor , setdoctor ]= useState(false);
    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [pass , setPass] = useState("")
    const [r_pass, setRpass] = useState("")

    function affiche_error() {
       
        const errors = [];

            if (name === "") {
                errors.push(<p className="error"><BiSolidError/> &nbsp; <span>Name must be required</span></p>);
                return errors;
              }
          
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
          
              if (r_pass !== pass) {
                errors.push(<p className="error"> <BiSolidError/> &nbsp; <span>Password Does not match</span></p>);
                return errors;
              }
              if(!patient && !doctor){
                  errors.push(<p className="error"> <BiSolidError/> &nbsp; <span>Choose the client type</span></p>);
                return errors;
              }
              
     return errors;
    }


    function setactive(user) {

        if( patient && user === "doctor" ){
            setdoctor(true);
            setpatient(false);
        }else if(doctor && user === "patient"){
            setdoctor(false);
            setpatient(true);
        }else if(!doctor && !patient && user === "patient"){
            setpatient(true);
        }else if(!doctor && !patient && user === "doctor"){
            setdoctor(true);
        }
    }


     return(
        <Components.Body>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Register</Components.Title>
                     <Components.Error>
                        {affiche_error()}
                     </Components.Error>
                     <Components.Input type='text' placeholder='Name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
                     <Components.Input type='email' placeholder='Email' onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                     <Components.Input type='password' placeholder='Password' onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
                     <Components.Input type='password' placeholder='Conferm Password' onChange={(e)=>{setRpass(e.target.value)}} value={r_pass}/>
                     <Components.BTN>
                        <Components.check onClick={() => setactive("patient")} patient={patient} doctor={doctor} ><FaUserInjured/> &nbsp;
                            Patient <br/> {patient ? <BsToggleOn className="toggle_on"/> : <LiaToggleOffSolid  /> }
                        </Components.check>
                        <Components.check onClick={() => setactive("doctor")}><FaUserTie/> &nbsp;
                            Doctor <br/> {doctor ? <BsToggleOn className="toggle_on"/> : <LiaToggleOffSolid /> }
                        </Components.check>
                     </Components.BTN>
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Sign/>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </Components.Body>
     )
}

export default Register;