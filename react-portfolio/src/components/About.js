import React from 'react';
import profilePic from "../assets/Fixed Image.PNG"; 

function About() {
	return (
		<section >
			<div>
				<h1 >
					About Me
				</h1>
			</div>

			<div>
				<img src={profilePic} style={{ width: "50%" }} alt="profile" />
			</div>

			<div>
				<p>
					paragraph 
				</p>
			</div>

		</section>
	);
}

export default About;