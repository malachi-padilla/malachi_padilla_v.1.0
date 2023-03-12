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
	background-color: #19191a;
	border: 1px solid #3a3a3b;
	textarea {
		width: 90%;
		background-color: transparent;
		padding: 1.6rem;
		font-size: 1.6rem;
		color: #fff;
		background: linear-gradient(#19191a, #19191a) padding-box, linear-gradient(to right, #a374ff, #00d9b8) border-box;
		border-radius: 1rem;
		border: 1px solid transparent;
		background-color: #19191a;
		margin-top: 4rem;
		resize: none;
		&::placeholder {
			color: #fff;
			font-weight: 300;
		}
		@media (max-width: 768px) {
			border: 1px solid #a374ff;
		}
	}
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

export const CustomLabel = styled.label`
	color: #ffd074;
	text-transform: uppercase;
	font-size: 0.8;
	letter-spacing: 3px;
	margin-bottom: 1rem;
	transition: all 550ms;
`;

export const CustomInput = styled.input`
	width: 100%;
	background-color: transparent;
	padding: 1.6rem 0;
	font-size: 1.6rem;
	color: #fff;
	transition: all 250ms;
	background: linear-gradient(#19191a, #19191a) padding-box, linear-gradient(to right, #a374ff, #00d9b8) border-box;
	border-bottom: 1px solid transparent;
	&:-webkit-autofill {
		background-color: rgb(232, 240, 254) !important;
		background-image: none !important;
		color: -internal-light-dark(black, white) !important;
	}
	&::placeholder {
		color: #fff;
		font-weight: 300;
		transition: all 250ms;
	}

	&:focus,
	&:active,
	&:autofill,
	&:hover {
		border-bottom: 1px solid #ffd074;
	}
	@media (max-width: 768px) {
		background: none;
		border-bottom: 1px solid #a374ff;
	}
`;

export const SubmitButton = styled.input`
	position: relative;
	background: linear-gradient(#1d1d1f, #1d1d1f) padding-box, linear-gradient(to right, #a374ff, #00d9b8) border-box;
	border: 1px solid transparent;
	font-size: 1.6rem;
	padding: 1.2rem 2.4rem;
	border-radius: 3rem;
	text-transform: capitalize;
	overflow: hidden;
	color: #fff;
	cursor: pointer;
	transition: all 250mst;
	:hover {
		background: #00d9b8;
		filter: drop-shadow(0.1rem 0.1rem 0.75rem #00d9b8);
	}
`;

export const Loader = styled.div``;
