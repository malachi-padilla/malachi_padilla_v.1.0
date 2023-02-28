import Link from 'next/link';
import { HeaderLeft, HeaderRight, HeaderWrapper, LinkItem, LinkList, LogoContainer } from './Header-css';
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import { navLinks } from '@/lib/staticObjects';
import React from 'react';
import { scrollToTop } from '@/util/utilFunctions';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<LogoContainer onClick={scrollToTop}>
					<Image src={logo} alt='malachi padilla' priority />
				</LogoContainer>
			</HeaderLeft>
			<HeaderRight>
				<LinkList>
					{navLinks.map((link, index) => (
						<LinkItem key={index} name={link.name}>
							<Link href={link.path} scroll={false}>
								{link.name}
							</Link>
						</LinkItem>
					))}
				</LinkList>
			</HeaderRight>
		</HeaderWrapper>
	);
};

export default Header;
