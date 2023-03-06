import React, { useState } from 'react';
import { HeaderLeft, HeaderRight, LogoContainer } from '../Header-css';
import { BurgerMenu, MobileHeaderWrapper, MobileNavWrapper, MobileLinkList, MobileLinkItem } from './MobileHeader-css';
import logo from '../../../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/staticObjects';
import { scrollToTop } from '@/util/utilFunctions';

const MobileHeader = () => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
	return (
		<>
			<MobileHeaderWrapper>
				<HeaderLeft>
					<LogoContainer onClick={scrollToTop}>
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
								<Link href={link.path} onClick={() => setBurgerMenuOpen(false)} scroll={false}>
									{link.name}
								</Link>
							</MobileLinkItem>
						))}
					</MobileLinkList>
				</MobileNavWrapper>
			</MobileHeaderWrapper>
		</>
	);
};

export default MobileHeader;
