import { FancyButton } from '@/theme/components/webComponents';
import { MainParagraph, PageSubTitle, PageTitle, PreTitle } from '@/theme/typography/typography';
import React from 'react';
import { HeroText, HeroWrap } from './Hero-css';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<PreTitle>Hello, my name is</PreTitle>
				<PageTitle>Malachi Padilla</PageTitle>
				<PageSubTitle>Frontend Developer &amp; Designer</PageSubTitle>
				<MainParagraph>
					Hello there! I am passionate about creating modern, user-friendly experiences that resonate with people.
					Whether you need assistance bringing your next big idea to fruition or are seeking an innovative front-end
					developer to join your team, I am here and eager to chat! I take great pride in my work and am committed to
					crafting experiences that are both visually stunning and highly functional. So, tell me more about your
					project and let&apos;s work together to bring your vision to life!
				</MainParagraph>
				<FancyButton href='#contact'>Work With Me!</FancyButton>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
