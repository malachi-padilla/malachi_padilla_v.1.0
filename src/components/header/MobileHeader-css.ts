import { spin } from '@/theme/animations/animation';
import styled from 'styled-components';

interface BurgerProps {
	open: boolean;
}

interface LinkProps {
	name: string;
}

export const HeaderLeft = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const HeaderRight = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const LogoContainer = styled.div`
	height: 100%;
	width: fit-content;
	justify-content: flex-start;
	align-items: center;
	img {
		height: 100%;
		width: auto;
		aspect-ratio: 1;
		animation: ${spin} 1.5s alternate ease-out;
		transition: transform 1.5s ease-out;
		&:hover {
			transform: rotate(360deg);
			cursor: pointer;
		}
	}
`;

export const MobileHeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 10vh;
	justify-content: flex-start;
	align-items: center;
	padding: 0 1rem;
	position: sticky;
	top: 0;
	z-index: 1;
	@media (max-width: 768px) {
		backdrop-filter: blur(5rem);
	}
`;

export const ThemeSwitchButton = styled.button`
	height: 50%;
	background-color: transparent;
	color: ${(props) => props.theme.typography.primary};
	font-size: 2.4rem;
	width: auto;
	aspect-ratio: 1;
	border-radius: 50%;
	cursor: pointer;
	filter: drop-shadow(0.1rem 0.1rem 0.75rem #1d1d1f30);
`;

export const BurgerMenu = styled.button<BurgerProps>`
	height: 100%;
	width: 15%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	z-index: 3;
	cursor: pointer;
	position: relative;
	span {
		height: 0.2rem;
		border-radius: 0.2rem;
		background-color: ${(props) => (props.open ? '#fff' : props.theme.typography.primary)};
		position: ${(props) => (props.open ? 'absolute' : 'unset')};
	}
	span:first-of-type {
		width: 5rem;
		transition: all 250ms;
		transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
	}
	span:nth-of-type(2) {
		transition: width 1s;
		width: ${(props) => (props.open ? '0' : '8rem')};
		opacity: ${(props) => (props.open ? '0' : '1')};
	}
	span:last-of-type {
		transition: all 250ms;
		width: ${(props) => (props.open ? '5rem' : '6rem')};
		transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
	@media (max-width: 768px) {
		width: 50%;
	}
`;

export const MobileNavWrapper = styled.nav<BurgerProps>`
	height: 100vh;
	width: ${(props) => (props.open ? '100%' : '0')};
	background-color: ${(props) => props.theme.purple};
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	overflow: hidden;
	transition: all 250ms;
`;
export const MobileLinkList = styled.ul`
	height: 100%;
	width: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1.6rem;
	padding: 1rem;
`;

export const MobileLinkItem = styled.li<LinkProps>`
	overflow: hidden;
	& a {
		font-size: 4rem;
		font-weight: 900;
		text-transform: uppercase;
		-webkit-text-stroke: 1px #fff;
		color: transparent;
		position: relative;
		height: fit-content;
		width: fit-content;

		&::before {
			content: '${(props) => props.name}';
			position: absolute;
			width: 0%;
			color: #fff;
			overflow: hidden;
			transition: all 450ms;
		}
		&:hover::before {
			width: 100%;
		}
	}
`;
