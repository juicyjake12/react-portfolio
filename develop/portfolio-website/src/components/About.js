import React from 'react';
import profilePic from "../assets/Fixed Image.PNG";

function About() {
	return (
		<section className='BioSection'>
			<div className='ProfileIMG'>
				<img src={profilePic} alt='profile'></img>
			</div>

			<div className='BIO'>

				<div className='BioTitle'>

					<h1>About Me</h1>

				</div>

				<div className='BioParagraph'>
					<p>
						ABOUT Me
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;