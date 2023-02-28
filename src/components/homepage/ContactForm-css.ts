import styled, { keyframes } from 'styled-components';

interface LabelProps {
	visible: boolean;
}

export const ContactSection = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	overflow: hidden;
	padding: 5rem 1rem;
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
		width: 95%;
	}
	h2 {
		font-size: 5rem;
		line-height: 5rem;
		color: #fff;
		margin: 0;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: -1px;
		text-align: center;
		span {
			background: -webkit-linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
			background: linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	p {
		font-size: 1.8rem;
		color: #fff;
		text-align: center;
	}
`;

export const FormWrap = styled.form`
	width: 100%;
	height: fit-content;
	padding: 4rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
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

export const CustomLabel = styled.label<LabelProps>`
	color: #ffd074;
	text-transform: uppercase;
	font-size: 0.8;
	letter-spacing: 3px;
	margin-bottom: 1rem;
	opacity: ${(props) => (props.visible ? '1' : '0')};
	transition: all 550ms;
`;

export const CustomInput = styled.input<LabelProps>`
	width: 100%;
	background-color: transparent;
	padding: 1.6rem 0;
	font-size: 1.6rem;
	color: #fff;
	/* border-bottom: 1px solid #a374ff; */
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
		opacity: ${(props) => (props.visible ? '0' : '1')};
	}

	&:focus,
	&:active,
	&:autofill {
		border-bottom: 1px solid #ffd074;
	}
	@media (max-width: 768px) {
		background: none;
		border-bottom: 1px solid #a374ff;
	}
`;

export const SubmitButton = styled.input`
	background-color: #ffd074;
	color: #fff;
	font-size: 1.6rem;
	padding: 1.2rem 2.4rem;
	border-radius: 3rem;
	font-weight: 500;
	position: relative;
	overflow: hidden;
	color: #19191a;
	cursor: pointer;
`;

export const Loader = styled.div``;
