import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function LogIn({onRouteChange}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onemailchange = (e) => {
        setEmail(e.target.value)
    }

    const onpasschange = (e) => {
        setPassword(e.target.value)
    }

    const onlogsubmit = () => {
        const data = localStorage.getItem('signin')
        const data2 = JSON.parse(data)
        var a = [];
        data2.forEach(function (obj,i) {
            a.push(obj.pass);
        })
        if(a.includes(password)){
            onRouteChange('home')
        }
    }




    return (
        <div className="mw6 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onemailchange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onpasschange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <button onClick={onlogsubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in">SignIn</button>
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/register'><p className="f6 link dim black db pointer">Register</p> </Link>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default LogIn;
