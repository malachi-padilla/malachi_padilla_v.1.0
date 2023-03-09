import { FancyTitle, MainParagraph, PreTitle } from '@/theme/layout/typography';
import Image from 'next/image';
import React from 'react';
import { HeroButton } from '../Hero-css';
import ProfilePhoto from '@/assets/profile-photo.png';
import { StoryImage, StoryText, StorySectionWrap } from './StorySection-css';

const StorySection = () => {
	return (
		<StorySectionWrap>
			<StoryText>
				<PreTitle>Who is this guy?</PreTitle>
				<FancyTitle>
					A little <span>history</span> on how I got here
				</FancyTitle>
				<MainParagraph>
					I never though this would be my career path. My passion for development came as a by product of unfortunate
					events that took place in 2019. I was laid off due to COVID and I broke my ankle. Leaving me immobile in a
					closet during a global pandemic. I began going to school for CS and fell in love. Thanks to
					<a target='_blank' href='https://freecodecamp.org/'>
						{' '}
						FreeCodeCamp.org
					</a>
					, my best friend, and the many valuable resources on the internet, I learned how to code and developed an
					addiction for frontend development.
				</MainParagraph>
				<MainParagraph>
					I can walk now, but I still spend most of my time sitting at my desk. In the last few years, I've had the
					pleasure of working on many side-projects, websites for local businesses and a{' '}
					<a href='https://cookd.io/' target='_blank'>
						start-up{' '}
					</a>
					company. Currently, I work for a small{' '}
					<a target='_blank' href='https://frontstreetmedia.com/'>
						marketing agency
					</a>{' '}
					in El Dorado hills, CA, where I build Custom WordPress & Shopify sites for a wide variety of clients, mainly
					in the off-road space.
				</MainParagraph>
				<MainParagraph>
					Right now, I'm looking for a job with a larger company that offers more opportunities for advancement.
				</MainParagraph>
				<HeroButton href='#contact'>get in touch</HeroButton>
			</StoryText>
			<StoryImage>
				<Image src={ProfilePhoto} alt='me in a tux' />
			</StoryImage>
		</StorySectionWrap>
	);
};

export default StorySection;
