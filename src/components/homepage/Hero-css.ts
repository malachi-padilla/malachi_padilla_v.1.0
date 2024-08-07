import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1; 
}
`;

export const HeroWrap = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 1.6rem;
`;

export const HeroText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	align-items: center;
	height: 100%;
	width: 100%;
	animation: ${fadeIn} 1.5s ease-in;
`;
