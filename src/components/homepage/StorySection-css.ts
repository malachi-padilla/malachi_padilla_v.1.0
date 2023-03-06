import { screenWidthBoolean } from '@/util/utilFunctions';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1; 
}
`;

export const StorySectionWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	gap: 2.5rem;
	width: 50%;
	padding: 2rem 0;
	@media (max-width: 1500px) {
		width: 60%;
	}
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 90%;
		flex-direction: column-reverse;
	}
`;

export const StoryText = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	height: 100%;
	width: 50%;
	gap: 1.6rem;
	position: relative;
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

export const StoryImage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	width: 40%;
	flex-grow: 1;
	animation: ${fadeIn} 1.5s ease-in;
	@media (max-width: 768px) {
		width: 100%;
	}
	img {
		width: 100%;
		max-width: 400px;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
		object-position: top;
		border-radius: 1rem;
		filter: drop-shadow(0.1rem 0.1rem 0.75rem #a374ff);
		background: linear-gradient(#a374ff, #00d9b8) padding-box,
			linear-gradient(to right, #ffd074, #a374ff, #00d9b8) border-box;
		border: 0.1rem solid transparent;
	}
`;
