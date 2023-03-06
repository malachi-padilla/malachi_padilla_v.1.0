import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	height: 20vh;
	background-color: #8453e8;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	p {
		font-size: 1.4rem;
	}
`;

export const SocialRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

export const SocialLink = styled.a`
	color: #fff;
	font-size: 2rem;
	height: 4rem;
	width: 4rem;
	background-color: transparent;
	border: 1px solid #fff;
	text-align: center;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 250ms;
	&:hover {
		background-color: #fff;
		color: #8453e8;
	}
`;
