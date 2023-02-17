import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0%{
transform:rotate(0deg)
}
100%{
transform:rotate(360deg);
}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 10vh;
	justify-content: flex-start;
	align-items: center;
	padding: 0 4rem;
`;

export const HeaderLeft = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-start;
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
		animation: ${spin} 1s alternate ease-out;
	}
`;

export const HeaderRight = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const LinkList = styled.ul`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 3.2rem;
`;

export const LinkItem = styled.li`
	font-size: 2rem;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 2px;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #fff;
`;
