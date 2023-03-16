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
	height: calc(100vh - 10vh);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 1rem;
`;

export const HeroText = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 100%;
	width: 50%;
	gap: 1.6rem;
	animation: ${fadeIn} 1.5s ease-in;
	@media (max-width: 1500px) {
		width: 60%;
	}
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 90%;
	}
`;
