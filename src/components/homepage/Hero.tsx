import React from 'react';
import { HeroButton, HeroText, HeroWrap } from './Hero-css';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<span>Hello 👋, my name is</span>
				<h1>Malachi Padilla</h1>
				<h2>Frontend Developer & Designer</h2>
				<p>
					I'm passionate about desiging, developing, and launching beautiful user experiences. If you need help building
					your next idea, or need an innovative frontend devloper on your team, please feel free to reach out!
				</p>
				<HeroButton href='#contact'>Work With Me!</HeroButton>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
