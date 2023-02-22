import React from 'react';
import { HeroButton, HeroText, HeroWrap } from './Hero-css';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<span>Hello 👋, my name is</span>
				<h1>Malachi Padilla</h1>
				<h2>Innovate. Create. Inspire. Repeat.</h2>
				{/* <h2>motivated, always learning</h2> */}
				<p>
					With a focus on delivering streamlined, user-friendly interfaces that drive engagement and conversion, I'm
					passionate about being a key contributor to a project's success from the ground up.
				</p>
				<HeroButton href='#contact'>Work With Me!</HeroButton>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
