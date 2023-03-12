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
					It all began when covid struck, I lost my job, and I broke my ankle. Fortunately, my best friend works as a
					software engineer. He taught me the fundamentals of programming, and I fell in love with it. Surprisingly,
					being immobilized in your mother&apos;s closet is a tried and true method of enforcing productivity.
				</MainParagraph>
				<MainParagraph>
					In the last few years, I&apos;ve had the pleasure of working on many side-projects, websites for local
					businesses and a{' '}
					<a href='https://cookd.io/' target='_blank' rel='noreferrer'>
						start-up{' '}
					</a>
					company. Currently, I work for a small{' '}
					<a target='_blank' href='https://frontstreetmedia.com/' rel='noreferrer'>
						marketing agency
					</a>{' '}
					in El Dorado hills, CA, where I build Custom WordPress & Shopify sites for a wide variety of clients, mainly
					in the off-road space.
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
