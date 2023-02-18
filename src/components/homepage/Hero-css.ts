import styled from 'styled-components';

export const HeroWrap = styled.section`
	height: calc(100vh - 10vh);
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const HeroText = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 100%;
	width: 60%;
	padding-left: 6rem;
	gap: 1rem;
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
	}
	h2 {
		font-size: 4rem;
		color: #fff;
		margin: 0;
		text-transform: uppercase;
		line-height: 4rem;
		font-weight: 900;
		color: #c471ed;
		letter-spacing: -1px;
	}
	p {
		font-size: 1.6rem;
		color: #fff;
	}
`;
