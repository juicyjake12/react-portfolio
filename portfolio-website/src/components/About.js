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
						Hello my name is Jacob Hopper and i am a full stack developer. im from clio Mi and i currently work at menards in the outside yard and i 
						am currently in pursait of a web development career. 
						PS. NOT FINISHED WITH PORTFOLIO
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;