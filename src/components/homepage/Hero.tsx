import { MainParagraph, PageSubTitle, PageTitle, PreTitle } from '@/theme/layout/typography';
import React from 'react';
import { HeroButton, HeroText, HeroWrap } from './Hero-css';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<PreTitle>Hello 👋, my name is</PreTitle>
				<PageTitle>Malachi Padilla</PageTitle>
				<PageSubTitle>Frontend Developer & Designer</PageSubTitle>
				<MainParagraph>
					I&apos;m passionate about designing, developing, and launching beautiful user experiences. If you need help
					building your next idea, or need an innovative frontend developer on your team, I&apos;d love to here about
					it!
				</MainParagraph>
				<HeroButton href='#contact'>Work With Me!</HeroButton>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
