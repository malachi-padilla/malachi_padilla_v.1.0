import { FooterContainer, SocialRow, SocialLink } from './Footer-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '@/util/utilFunctions';
import { useEffect, useState } from 'react';

const Footer = () => {
	const [year, setYear] = useState<number>();

	useEffect(() => {
		setYear(getYear);
	}, []);
	return (
		<FooterContainer>
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
			<p>Made with 100% natural ingredients by me © {year}</p>
		</FooterContainer>
	);
};

export default Footer;
