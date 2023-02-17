import Link from 'next/link';
import { HeaderLeft, HeaderRight, HeaderWrapper, LinkItem, LinkList, LogoContainer } from './Header-css';
import logo from '../../assets/logo.svg';
import Image from 'next/image';

interface link {
	name: string;
	path: string;
}

const navLinks: link[] = [
	{ name: 'About', path: '#' },
	{ name: 'Projects', path: '#' },
	{ name: 'Contact', path: '#' },
];

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<LogoContainer>
					<Image src={logo} alt='malachi padilla' />
				</LogoContainer>
			</HeaderLeft>
			<HeaderRight>
				<LinkList>
					{navLinks.map((link, index) => (
						<LinkItem key={index}>
							<Link href={link.path}>{link.name}</Link>
						</LinkItem>
					))}
				</LinkList>
			</HeaderRight>
		</HeaderWrapper>
	);
};

export default Header;
