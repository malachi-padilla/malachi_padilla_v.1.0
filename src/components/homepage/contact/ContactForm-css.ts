import styled from 'styled-components';
import wavyBg from '@/assets/wavy-bg.svg';

export const ContactSection = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 1rem;
	background-image: url(${wavyBg.src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	gap: 2.5rem;
	width: 50%;
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

export const FormWrap = styled.form`
	width: 100%;
	height: fit-content;
	padding: 4rem;
	border-radius: 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 2rem;
	gap: 2rem;
	background-color: ${(props) => props.theme.primary};
	border: 1px solid ${(props) => props.theme.tertiary};
`;

export const FromGroup = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

export const ButtonRow = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

export const Loader = styled.div``;
