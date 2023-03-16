import styled from 'styled-components';

interface ProjectProps {
	order: number;
	preview?: string;
}

interface ProjectPropsMobile {
	preview: string;
}

export const ContentContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
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

export const ProjectContainer = styled.div<ProjectProps>`
	height: 100%;
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => (props.order % 2 == 0 ? 'flex-start' : 'flex-end')};
	align-items: center;
	margin-top: 3rem;
`;

export const ProjectPreview = styled.div<ProjectProps>`
	height: auto;
	width: 90%;
	aspect-ratio: 4/2;
	background-color: ${(props) => props.theme.purple};
	background-image: url(${(props) => props.preview});
	background-blend-mode: overlay;
	background-position: top;
	background-size: cover;
	border-radius: 0.4rem;
	position: relative;
	transition: all 250ms;
	cursor: pointer;
	:hover {
		/* background-size: 110% 110%; */
		background-color: transparent;
	}
`;

export const ProjectMeta = styled.div<ProjectProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: all 250ms;
	align-items: ${(props) => (props.order % 2 == 0 ? 'flex-end' : 'flex-start')};
	text-align: ${(props) => (props.order % 2 == 0 ? 'right' : 'left')};
	gap: 0.8rem;
	width: 60%;
	min-height: 50%;
	height: fit-content;
	position: absolute;
	right: ${(props) => (props.order % 2 == 0 ? '-10%' : 'unset')};
	left: ${(props) => (props.order % 2 == 0 ? 'unset' : '-10%')};
	bottom: 0;
	top: 0;
	margin: auto;
	filter: drop-shadow(0.1rem 0.1rem 0.75rem #a374ff);
	-webkit-filter: drop-shadow(0.1rem 0.1rem 0.75rem #a374ff);
	background: linear-gradient(${(props) => props.theme.primary}, ${(props) => props.theme.primary}) padding-box,
		linear-gradient(to right, #ffd074, #a374ff, #00d9b8) border-box;
	border: 0.1rem solid transparent;
	border-radius: 0.4rem;
	padding: 2rem;
	overflow: hidden;

	h2 {
		font-size: 2.2rem;
		text-transform: uppercase;
	}

	p {
		font-size: 1.4rem;
	}

	ul {
		display: flex;
		width: 100%;
		flex-flow: wrap;
		justify-content: ${(props) => (props.order % 2 == 0 ? 'flex-end' : 'flex-start')};
		text-align: ${(props) => (props.order % 2 == 0 ? 'right' : 'left')};
		li {
			font-size: 1.4rem;
			text-transform: capitalize;
			color: #a374ff;
		}

		li:not(:last-of-type)::after {
			content: '·';
			margin: 0 0.4rem;
		}
	}
	a {
		font-size: 2rem;
		transition: all 250ms;
		:hover {
			color: #a374ff;
		}
	}
`;

export const ProjectContainerMobile = styled.div<ProjectPropsMobile>`
	width: 100%;
	height: auto;
	background-image: url(${(props) => props.preview});
	background-position: left;
	background-size: cover;
	border-radius: 0.4rem;
	margin-top: 3rem;
	background-color: #19191a;
	border-radius: 1rem;
	overflow: hidden;
	background-blend-mode: multiply;
	filter: drop-shadow(0.1rem 0.1rem 0.75rem #a374ff);
	-webkit-filter: drop-shadow(0.1rem 0.1rem 0.75rem #a374ff);
	aspect-ratio: 1;
	@media (min-width: 768px) {
		aspect-ratio: 4/2;
	}
`;

export const ProjectMetaMobile = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: #a374ff30;
	padding: 3rem;
	gap: 1.6rem;
	color: #fff;

	h2 {
		font-size: 2.8rem;
		text-transform: uppercase;
	}

	p {
		font-size: 1.6rem;
	}

	ul {
		display: flex;
		width: 100%;
		flex-flow: wrap;
		justify-content: flex-start;
		text-align: left;
		li {
			font-size: 1.6rem;
			text-transform: capitalize;
			color: ${(props) => props.theme.purple};
		}

		li:not(:last-of-type)::after {
			content: '·';
			margin: 0 0.4rem;
		}
	}
	a {
		font-size: 2rem;
		transition: all 250ms;
		:hover {
			color: ${(props) => props.theme.purple};
		}
	}
`;
