import { FancyTitle, MainParagraph, PreTitle } from '@/theme/typography/typography';
import Image from 'next/image';
import React from 'react';
import { HeroButton } from '../Hero-css';
import ProfilePhoto from '@/assets/profile.png';
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
					When the COVID-19 pandemic hit, my life took an unexpected turn. I lost my job and broke my ankle, leaving me
					feeling stuck and uncertain about my future. However, amidst the challenges, I found a new passion -
					programming. Thanks to the guidance and support of my best friend, a skilled software engineer, I was able to
					learn the fundamentals of programming and quickly fell in love with it.
				</MainParagraph>
				<MainParagraph>
					Despite being confined to my mother&apos;s closet due to my injury, I found that this forced solitude was the
					perfect opportunity to focus on developing my skills and exploring this new career path. Today, I am grateful
					for the difficult circumstances that led me to discover my passion for programming and excited about the
					endless possibilities that lie ahead.
				</MainParagraph>

				<MainParagraph>
					In the last few years I&apos;ve had the pleasure of working on many side-projects, websites for local
					businesses and a{' '}
					<a href='https://cookd.io/' target='_blank' rel='noreferrer'>
						start-up{' '}
					</a>
					company. I now work for a small marketing agency in El Dorado hills, CA, where I build Custom WordPress &amp;
					Shopify sites for a wide variety of clients, mainly in the off-road space.
				</MainParagraph>
				<MainParagraph>
					As of now, i&apos;m looking for work with a bigger company that can offer more growth and propel my learning
					even further.
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
