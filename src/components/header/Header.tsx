import React from 'react';
import { HeaderWrapper, HeaderLeft, LogoContainer, HeaderInner } from './Header-css';
import logo from '@/assets/logo.svg';
import Image from 'next/image';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderInner>
				<HeaderLeft>
					<LogoContainer>
						<Image src={logo} alt='malachi padilla' />
					</LogoContainer>
				</HeaderLeft>
			</HeaderInner>
		</HeaderWrapper>
	);
};

export default Header;
