import { spin } from '@/theme/animations/animation';
import { ThemeSwitchProps } from '@/types/staticTypes';
import styled from 'styled-components';

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

export const LogoContainer = styled.div<ThemeSwitchProps>`
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

export const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 7rem;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 1;
`;

export const HeaderInner = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	max-width: 1390px;
	justify-content: flex-start;
	align-items: center;
`;
