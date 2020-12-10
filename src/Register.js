import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Register({onRouteChange}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const onemailchange =(e)=>{
        setEmail(e.target.value)
    }

    const onpasschange = (e) =>{
        setPassword(e.target.value)
    }

    const onnamechange =(e)=>{
        setName(e.target.value)
    }

    const onsubmit = () =>{
       
        const Items={
            name:name,
            email:email,
            pass:password
        };
        const data = localStorage.getItem("signin")
        if(localStorage.getItem('signin')==null){
            const updated = [...JSON.parse(data), name, email,password]
            localStorage.setItem("signin",JSON.stringify(updated))
            onRouteChange('home')
        }
        else{
            localStorage.setItem("signin",JSON.stringify(name,email,password))
            onRouteChange('home')
        }
    }

     
    

    return (
        <div className="mw6 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10">
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Register</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">name</label>
                            <input onChange={onnamechange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address" id="email-address" />
                        </div>
                        <div class="mt3">
                            <label onChange={onemailchange} class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input onChange={onpasschange}  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div class="">
                        <input onClick={onsubmit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div class="lh-copy mt3">
                    <Link to='/'><p className="f6 link dim black db pointer">Log In</p></Link> 
                    </div>
                </form>
            </main>

        </div>
    );
}

export default Register;
