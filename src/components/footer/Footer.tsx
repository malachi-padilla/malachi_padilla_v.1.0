import { FooterContainer, SocialRow, SocialLink } from './Footer-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<FooterContainer>
			<SocialRow>
				<SocialLink target='_blank' href='https://github.com/malachi-padilla?tab=repositories'>
					<FontAwesomeIcon className='icon' icon={faGithub} />
				</SocialLink>
				<SocialLink target='_blank' href='https://www.linkedin.com/in/malachi-padilla-5a2189223/'>
					<FontAwesomeIcon className='icon' icon={faLinkedinIn} />
				</SocialLink>
				<SocialLink href='mailto:malachicadenpadilla@gmail.com'>
					<FontAwesomeIcon className='icon' icon={faEnvelope} />
				</SocialLink>
			</SocialRow>
			<p>Made with 100% natural ingredients by me © 2023</p>
		</FooterContainer>
	);
};

export default Footer;
