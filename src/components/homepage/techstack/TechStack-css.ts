import styled, { keyframes } from 'styled-components';

interface TechProps {
	info: number | null;
}

const fadeIn = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1; 
}
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
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
		flex-direction: column-reverse;
		position: relative;
	}
`;

export const ContentLeft = styled.div`
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

export const TechList = styled.ul<TechProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1.6rem;
	justify-content: flex-start;
	align-items: flex-start;
	ul {
		transition: opacity 250ms;
	}

	& > li {
		font-size: 1.6rem;
		color: ${(props) => props.theme.typography.primary};
		cursor: pointer;
		width: 100%;
		padding-left: 1.6rem;
		border-left: 2px solid ${(props) => props.theme.typography.primary};
	}

	li:hover {
		:hover {
			border-color: ${(props) => props.theme.purple};
		}
	}
	li:nth-of-type(1) {
		border-color: ${(props) => (props.info === 1 ? props.theme.purple : '')};

		ul {
			opacity: ${(props) => (props.info === 1 ? '1' : '0')};
			display: ${(props) => (props.info === 1 ? '' : 'none')};
		}
	}
	li:nth-of-type(2) {
		border-color: ${(props) => (props.info === 2 ? props.theme.purple : '')};

		ul {
			opacity: ${(props) => (props.info === 2 ? '1' : '0')};
			display: ${(props) => (props.info === 2 ? '' : 'none')};
		}
	}
	li:nth-of-type(3) {
		border-color: ${(props) => (props.info === 3 ? props.theme.purple : '')};

		ul {
			opacity: ${(props) => (props.info === 3 ? '1' : '0')};
			display: ${(props) => (props.info === 3 ? '' : 'none')};
		}
	}
	li:nth-of-type(4) {
		border-color: ${(props) => (props.info === 4 ? props.theme.purple : '')};

		ul {
			opacity: ${(props) => (props.info === 4 ? '1' : '0')};
			display: ${(props) => (props.info === 4 ? '' : 'none')};
		}
	}
	li:nth-of-type(5) {
		border-color: ${(props) => (props.info === 5 ? props.theme.purple : '')};

		ul {
			opacity: ${(props) => (props.info === 5 ? '1' : '0')};
			display: ${(props) => (props.info === 5 ? '' : 'none')};
		}
	}
`;

// 84ba64 node.js
// f7df1e javascript
// 007acc typescript
// 61dbfb React
// #000 Next

export const ContentRight = styled.div`
	height: 100%;
	width: 50%;
	flex-grow: 1;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const StackWrap = styled.div<TechProps>`
	height: 80rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	perspective: 999999px;
	transform-style: preserve-3d;

	div {
		width: 250px;
		height: 250px;
		aspect-ratio: 1;
		background-color: ${(props) => props.theme.typography.primary};
		border-radius: 1rem;
		filter: drop-shadow(0.1rem 0.1rem 0.75rem #1d1d1f30);
		-webkit-filter: drop-shadow(0.1rem 0.1rem 0.75rem #1d1d1f30);
		transform: rotate(45deg) rotateX(30deg) rotateY(-30deg);
		position: absolute;
		opacity: 0.9;
		cursor: pointer;
		transition: all 250ms;
		&:nth-of-type(1) {
			top: 0;
			z-index: 5;
			background-color: ${(props) => (props.info === 1 ? props.theme.purple : '')};
			:hover {
				background-color: ${(props) => props.theme.purple};
			}
		}
		&:nth-of-type(2) {
			top: 10%;
			z-index: 4;
			background-color: ${(props) => (props.info === 2 ? props.theme.purple : '')};
			:hover {
				background-color: #a374ff;
			}
		}
		&:nth-of-type(3) {
			top: 20%;
			z-index: 3;
			background-color: ${(props) => (props.info === 3 ? props.theme.purple : '')};
			:hover {
				background-color: #a374ff;
			}
		}
		&:nth-of-type(4) {
			top: 30%;
			z-index: 2;
			background-color: ${(props) => (props.info === 4 ? props.theme.purple : '')};
			:hover {
				background-color: #a374ff;
			}
		}
		&:nth-of-type(5) {
			top: 40%;
			z-index: 1;
			background-color: ${(props) => (props.info === 5 ? props.theme.purple : '')};
			:hover {
				background-color: #a374ff;
			}
		}
	}
`;
