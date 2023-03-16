import styled, { keyframes } from 'styled-components';

interface BlobProps {
	top: number;
	left: number;
}

const blobBehavior = keyframes`
0%{
    transform:rotate(0deg);
}

100%{
    transform:rotate(360deg);
}
`;

export const BlurWrap = styled.div`
	height: 100%;
	width: 100%;
	z-index: -1;
	position: absolute;
	filter: blur(10rem);
	top: 0;
	overflow: hidden;
`;

export const Blob = styled.div<BlobProps>`
	height: 30rem;
	width: 30rem;
	background-color: #fff;
	border-radius: 50%;
	background: #12c2e9;
	background: -webkit-linear-gradient(to right, #ffd074, #a374ff);
	background: linear-gradient(to right, #ffd074, #a374ff);
	animation: ${blobBehavior} 3s linear forwards infinite;
	position: absolute;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
