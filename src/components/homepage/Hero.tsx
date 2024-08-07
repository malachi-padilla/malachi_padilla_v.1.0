import { MainParagraph, PageSubTitle, PageTitle, PreTitle } from '@/theme/typography/typography';
import { HeroText, HeroWrap } from './Hero-css';
import { SocialLink, SocialRow } from '../footer/Footer-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
	return (
		<HeroWrap>
			<HeroText>
				<PageTitle>Malachi Padilla</PageTitle>
				<PageSubTitle>Frontend Engineer</PageSubTitle>
				<MainParagraph>I&apos;m not looking for work right now...</MainParagraph>
				<SocialRow>
					<SocialLink target='_blank' href='https://github.com/malachi-padilla?tab=repositories' rel='noreferrer'>
						<FontAwesomeIcon className='icon' icon={faGithub} />
					</SocialLink>
					<SocialLink target='_blank' href='https://www.linkedin.com/in/malachi-padilla-5a2189223/' rel='noreferrer'>
						<FontAwesomeIcon className='icon' icon={faLinkedinIn} />
					</SocialLink>
					<SocialLink href='mailto:malachicadenpadilla@gmail.com'>
						<FontAwesomeIcon className='icon' icon={faEnvelope} />
					</SocialLink>
				</SocialRow>
			</HeroText>
		</HeroWrap>
	);
};

export default Hero;
