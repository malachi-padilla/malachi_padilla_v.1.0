import React, { useState } from 'react';
import { HeaderLeft, HeaderRight, LogoContainer } from '../Header-css';
import { BurgerMenu, MobileHeaderWrapper, BurgerMenuClose } from './MobileHeader-css';
import logo from '../../../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const MobileHeader = () => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
	return (
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
		</MobileHeaderWrapper>
	);
};

export default MobileHeader;
