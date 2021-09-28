import React from 'react'
// import { Link } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import '../stylesheets/signup.css';

export default function signup() {

	const signupform = {
		name: '',
		email: '',
		password: ''
	}

	return (
		<div className="main-w3layouts wrapper">
			<h1>Creative SignUp Form</h1>

			<div className="main-agileinfo">
				<div className="agileits-top">
					<form action="#" method="post">
						<input className="text" type="text" name="name" placeholder="Username" onChange={handleChange} value={values.name} />
						<input className="text email" type="email" name="email" placeholder="Email" onChange={handleChange} value={values.email} />
						<input className="text" type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
						<input className="text w3lpass" type="password" placeholder="Confirm Password" />
						<div className="wthree-text">
							<label className="anim">
								<input type="checkbox" className="checkbox" />
								<span>I Agree To The Terms & Conditions</span>
							</label>
							<div className="clear"> </div>
						</div>
						<input type="submit" value="SIGNUP" />
					</form>
					<p>Don't have an Account?<BrowserRouter> <Link to="/login"> Login Now!</Link ></BrowserRouter></p>
				</div>
			</div>

			<div className="colorlibcopy-agile">
				<p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
			</div>

			<ul className="colorlib-bubbles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>

	)
}
