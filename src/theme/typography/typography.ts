import styled from 'styled-components';

export const FancyTitle = styled.h2`
	font-size: 5rem;
	line-height: 5rem;
	color: ${(props) => props.theme.typography.primary};
	margin: 0;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: -1px;
	text-align: left;
	width: 100%;
	span {
		background: -webkit-linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
		background: linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media (max-width: 768px) {
		line-height: 3rem;
		font-size: 3rem;
	}
`;

export const PreTitle = styled.span`
	font-size: 1.6rem;
	font-weight: 900;
	text-transform: uppercase;
	-webkit-text-stroke: 1px ${(props) => props.theme.typography.primary};
	color: transparent;
`;

export const PageTitle = styled.h1`
	font-size: 8rem;
	color: ${(props) => props.theme.typography.primary};
	margin: 0;
	text-transform: uppercase;
	font-weight: 900;
	@media (max-width: 768px) {
		font-size: 5rem;
	}
`;

export const PageSubTitle = styled.h2`
	font-size: 4rem;
	color: ${(props) => props.theme.typography.primary};
	margin-bottom: 1.6rem;
	text-transform: uppercase;
	font-weight: 900;
	color: #ffd074;
	background: -webkit-linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
	background: linear-gradient(to right, #ffd074, #a374ff, #00d9b8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 768px) {
		line-height: 3.5rem;
		font-size: 3.5rem;
	}
`;

export const MainParagraph = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.typography.primary};
	font-family: 'iA Writer Mono', monospace;
	a {
		color: ${(props) => props.theme.purple};
		transition: all 250ms;
		:hover {
			color: ${(props) => props.theme.cyan};
		}
	}
`;
