import Link from 'next/link';
import { HeaderLeft, HeaderRight, HeaderWrapper, LinkItem, LinkList } from './Header-css';

interface link {
	name: string;
	path: string;
}

const Header = () => {
	const navLinks: link[] = [
		{ name: 'About', path: '#' },
		{ name: 'Projects', path: '#' },
		{ name: 'Contact', path: '#' },
	];

	return (
		<HeaderWrapper>
			<HeaderLeft></HeaderLeft>
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
