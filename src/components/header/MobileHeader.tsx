import React, { useState } from 'react';
import {
	BurgerMenu,
	MobileHeaderWrapper,
	MobileNavWrapper,
	MobileLinkList,
	MobileLinkItem,
	HeaderLeft,
	HeaderRight,
	LogoContainer,
	ThemeSwitchButton,
} from './MobileHeader-css';
import logo from '@/assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/staticObjects';
import { scrollToTop } from '@/util/utilFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitchProps } from '@/types/staticTypes';

const MobileHeader = ({ isDarkTheme, setIsDarkTheme }: ThemeSwitchProps) => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
	return (
		<MobileHeaderWrapper>
			<HeaderLeft>
				<LogoContainer onClick={scrollToTop} isDarkTheme={isDarkTheme as boolean}>
					<Image src={logo} alt='malachi padilla' />
				</LogoContainer>
			</HeaderLeft>
			<HeaderRight>
				<ThemeSwitchButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
					<FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
				</ThemeSwitchButton>
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
	);
};

export default MobileHeader;
