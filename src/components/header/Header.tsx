import Link from 'next/link';
import { HeaderLeft, HeaderRight, HeaderWrapper, LinkItem, LinkList, LogoContainer } from './Header-css';
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import { navLinks } from '@/lib/staticObjects';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<LogoContainer as={Link as any} href='/'>
					<Image src={logo} alt='malachi padilla' />
				</LogoContainer>
			</HeaderLeft>
			<HeaderRight>
				<LinkList>
					{navLinks.map((link, index) => (
						<LinkItem key={index} name={link.name}>
							<Link href={link.path}>{link.name}</Link>
						</LinkItem>
					))}
				</LinkList>
			</HeaderRight>
		</HeaderWrapper>
	);
};

export default Header;
