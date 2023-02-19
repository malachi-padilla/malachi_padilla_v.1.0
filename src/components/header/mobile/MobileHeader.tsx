import React, { useState } from 'react';
import { HeaderLeft, HeaderRight, LinkItem, LinkList, LogoContainer } from '../Header-css';
import { BurgerMenu, MobileHeaderWrapper, MobileNavWrapper, MobileLinkList, MobileLinkItem } from './MobileHeader-css';
import logo from '../../../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/staticObjects';

const MobileHeader = () => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
	return (
		<>
			<MobileHeaderWrapper>
				<HeaderLeft>
					<LogoContainer as={Link as any} href='/'>
						<Image src={logo} alt='malachi padilla' />
					</LogoContainer>
				</HeaderLeft>
				<HeaderRight>
					<BurgerMenu open={burgerMenuOpen} onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
						<span></span>
						<span></span>
						<span></span>
					</BurgerMenu>
				</HeaderRight>
				<MobileNavWrapper open={burgerMenuOpen}>
					<MobileLinkList>
						{navLinks.map((link, index) => (
							<MobileLinkItem key={index} name={link.name}>
								<Link href={link.path}>{link.name}</Link>
							</MobileLinkItem>
						))}
					</MobileLinkList>
				</MobileNavWrapper>
			</MobileHeaderWrapper>
		</>
	);
};

export default MobileHeader;
