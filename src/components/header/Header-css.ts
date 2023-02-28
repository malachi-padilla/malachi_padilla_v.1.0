import styled, { keyframes } from 'styled-components';

export interface linkProps {
	name: string;
}

const spin = keyframes`
0%{
transform:rotate(0deg)
}
100%{
transform:rotate(360deg);
}
`;

export const HeaderWrapper = styled.nav`
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
		animation: ${spin} 1.5s alternate ease-out;
		transition: transform 1.5s ease-out;
		&:hover {
			transform: rotate(360deg);
			cursor: pointer;
		}
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
	gap: 1.6rem;
`;

export const LinkItem = styled.li<linkProps>`
	overflow: hidden;
	& a {
		font-size: 1.8rem;
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
			transition: all 450ms;

			/* ----first animation---- */

			width: 0%;
			color: #fff;
			overflow: hidden;

			/* ----second animation---- */

			/* background-color: #fff;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			transform: translateY(100%); */
		}
		&:hover::before {
			/* transform: translateY(0%); */
			width: 100%;
		}
		&.current::before {
			width: 100%;
		}
	}
`;
