import { FancyTitle, MainParagraph, PreTitle } from '@/theme/typography/typography';
import Image from 'next/image';
import ProfilePhoto from '@/assets/profile.png';
import { StoryImage, StoryText, StorySectionWrap } from './StorySection-css';
import { FancyButton } from '@/theme/components/webComponents';

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
					I found that being stuck at home was the perfect opportunity to focus on developing my skills and exploring
					this new career path. Today, I am grateful for the difficult circumstances that led me to discover my passion
					for programming and excited about the endless possibilities that lie ahead.
				</MainParagraph>

				<MainParagraph>
					In the last few years I&apos;ve had the pleasure of working on many side-projects, websites for local
					businesses, a{' '}
					<a href='https://cookd.io/' target='_blank' rel='noreferrer'>
						start-up
					</a>
					, and a marketing agency.
				</MainParagraph>
				<MainParagraph>
					As of now, i&apos;m continuing to work on and find projects that excite me. If you have an exciting
					opportunity I&apos;d love to hear about it!
				</MainParagraph>
				<FancyButton href='#contact'>get in touch</FancyButton>
			</StoryText>
			<StoryImage>
				<Image src={ProfilePhoto} alt='me in a tux' />
			</StoryImage>
		</StorySectionWrap>
	);
};

export default StorySection;
