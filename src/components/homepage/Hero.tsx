import React from 'react';
import { HeroButton, HeroText, HeroWrap } from './Hero-css';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<span>Hello 👋, my name is</span>
				<h1>Malachi Padilla</h1>
				<h2>Adaptable, forward-thinking, and always up for a new challenge.</h2>
				{/* <h2>motivated, always learning</h2> */}
				<p>
					Looking for a highly skilled web developer who can bring your ideas to life? Look no further! With expertise
					in modern web technologies and a passion for creating exceptional user experiences, I specialize in building
					high-quality software applications that are tailored to meet the unique needs of my clients. Whether you need
					a complete end-to-end solution or just some expert guidance, I'm committed to delivering exceptional code and
					results that will take your project to the next level. Let's work together to create something amazing!
				</p>
				<HeroButton href='#'>Work With Me!</HeroButton>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
