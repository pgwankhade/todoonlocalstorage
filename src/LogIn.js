import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function LogIn(onRouteChange) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onemailchange =(e)=>{
        setEmail(e.target.value)
    }

    const onpasschange = (e) =>{
        setPassword(e.target.value)
    }



    return (
        <div className="mw6 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10">
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input onChange ={onemailchange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div class="lh-copy mt3">
                    <Link to='/register'><p  className="f6 link dim black db pointer">Register</p> </Link> 
                    </div>
                </form>
            </main>

        </div>
    );
}

export default LogIn;
