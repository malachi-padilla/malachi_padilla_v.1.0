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
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
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
	span {
		font-size: 1.6rem;
		font-weight: 900;
		text-transform: uppercase;
		-webkit-text-stroke: 1px #fff;
		color: transparent;
	}
	h1 {
		font-size: 8rem;
		color: #fff;
		margin: 0;
		text-transform: uppercase;
		font-weight: 900;
		line-height: 8rem;
		@media (max-width: 768px) {
			line-height: 5rem;
			font-size: 5rem;
		}
	}
	h2 {
		font-size: 4rem;
		color: #fff;
		margin: 0;
		text-transform: uppercase;
		line-height: 4rem;
		font-weight: 900;
		color: #ffd074;
		letter-spacing: -1px;
		background: -webkit-linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
		background: linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		@media (max-width: 768px) {
			line-height: 3.5rem;
			font-size: 3.5rem;
		}
	}
	p {
		font-size: 1.8rem;
		color: #fff;
	}
`;

export const HeroButton = styled.a`
	color: #fff;
	font-size: 1.8rem;
	padding: 1.2rem 2.4rem;
	border: 1px solid #fff;
	border-radius: 3rem;
	text-transform: uppercase;
	font-weight: 900;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #12c2e9;
		background: -webkit-linear-gradient(to right, #ffd074, #a374ff);
		background: linear-gradient(to right, #ffd074, #a374ff);
		transform: translateX(-100%);
		transition: all 400ms;
		z-index: -1;
	}
	&:hover::before {
		transform: translateX(0%);
	}
`;
