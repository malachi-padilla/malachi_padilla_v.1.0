import styled, { keyframes } from 'styled-components';
import wavyBg from '@/assets/wavy-bg.svg';
import { FormMessageProps } from '@/types/staticTypes';

const shimmer = keyframes`
100%{	
	transform: translateX(100%);
}

`;

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
	height: 55rem;
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
	position: relative;
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

export const LoadingSkeleton = styled.div`
	width: 100%;
	height: 55rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	overflow: hidden;
	div {
		height: 25%;
		flex-grow: 1;
		border-radius: 0.4rem;
		width: 90%;
		background-color: ${(props) => props.theme.secondary};
		position: relative;
		overflow: hidden;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			height: 100%;
			transform: translateX(-100%);
			background-image: linear-gradient(45deg, transparent 10%, ${(props) => props.theme.tertiary});
			animation: ${shimmer} 1.5s infinite;
		}
	}

	div:nth-child(3) {
		height: 50%;
	}

	div:last-of-type {
		border-radius: 3rem;
		height: 15%;
		width: 16rem;
		&::after {
		}
	}
`;

export const MessageBox = styled.div<FormMessageProps>`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 50%;
		width: 70%;
		gap: 1.6rem;
		padding: 3rem;
		border-radius: 1rem;
		background: ${(props) => props.theme.secondary};
		border: 1px solid ${(props) => (props.formState == 'success' ? '#00d9b8' : '#ff477e')};
		h3 {
			font-size: 3.6rem;
			text-transform: uppercase;
			font-weight: 900;
			svg {
				margin-left: 1rem;
			}
		}

		p {
			font-size: 1.8em;
		}
	}
`;
