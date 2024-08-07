import React from 'react';
import { HeaderWrapper, HeaderLeft, LogoContainer, HeaderInner } from './Header-css';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import { ThemeSwitchProps } from '@/types/staticTypes';

const Header = ({ isDarkTheme }: ThemeSwitchProps) => {
	return (
		<HeaderWrapper>
			<HeaderInner>
				<HeaderLeft>
					<LogoContainer isDarkTheme={isDarkTheme as boolean}>
						<Image src={logo} alt='malachi padilla' />
					</LogoContainer>
				</HeaderLeft>
			</HeaderInner>
		</HeaderWrapper>
	);
};

export default Header;
