import styled from 'styled-components';

export const FancyButton = styled.a`
	color: ${(props) => props.theme.typography.primary};
	font-size: 1.8rem;
	padding: 1.2rem 2.4rem;
	border: 1px solid ${(props) => props.theme.typography.primary};
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
	&:hover {
		color: #fff;
	}
`;

export const CustomLabel = styled.label`
	color: ${(props) => props.theme.yellow};
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
	color: ${(props) => props.theme.typography.primary};
	transition: all 250ms;
	background: linear-gradient(${(props) => props.theme.primary}, ${(props) => props.theme.primary}) padding-box,
		linear-gradient(to right, #a374ff, #00d9b8) border-box;
	border-bottom: 1px solid transparent;
	&:-webkit-autofill {
		background-color: rgb(232, 240, 254) !important;
		background-image: none !important;
		color: -internal-light-dark(black, white) !important;
	}
	&::placeholder {
		color: ${(props) => props.theme.typography.primary};
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
	background: linear-gradient(${(props) => props.theme.primary}, ${(props) => props.theme.primary}) padding-box,
		linear-gradient(to right, #a374ff, #00d9b8) border-box;
	border: 1px solid transparent;
	font-size: 1.6rem;
	padding: 1.2rem 2.4rem;
	border-radius: 3rem;
	text-transform: capitalize;
	overflow: hidden;
	color: ${(props) => props.theme.typography.primary};
	cursor: pointer;
	transition: all 250mst;
	:hover {
		background: ${(props) => props.theme.cyan};
		color: #fff;
		filter: drop-shadow(0.1rem 0.1rem 0.75rem #00d9b8);
		-webkit-filter: drop-shadow(0.1rem 0.1rem 0.75rem #00d9b8);
	}
`;

export const CustomtextArea = styled.textarea`
	width: 90%;
	background-color: transparent;
	padding: 1.6rem;
	font-size: 1.6rem;
	color: ${(props) => props.theme.typography.primary};
	background: linear-gradient(${(props) => props.theme.primary}, ${(props) => props.theme.primary}) padding-box,
		linear-gradient(to right, #a374ff, #00d9b8) border-box;
	border-radius: 1rem;
	border: 1px solid transparent;
	background-color: #19191a;
	margin-top: 4rem;
	resize: none;
	&::placeholder {
		color: ${(props) => props.theme.typography.primary};
		font-weight: 300;
	}
	@media (max-width: 768px) {
		border: 1px solid #a374ff;
	}
`;
