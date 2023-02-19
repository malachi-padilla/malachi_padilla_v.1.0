import styled, { keyframes } from 'styled-components';

interface BlobProps {
	top: number;
	left: number;
}

const blobBehavior = keyframes`
0%{
    transform:rotate(0deg);
}
50%{
    width:60rem;
}
100%{
    transform:rotate(360deg);
}
`;

export const BlurWrap = styled.div`
	height: 100%;
	width: 100%;
	filter: blur(15rem);
	z-index: -1;
	position: absolute;
	top: 0;
	overflow: hidden;
`;

export const Blob = styled.div<BlobProps>`
	height: 50rem;
	width: 50rem;
	background-color: #fff;
	border-radius: 50%;
	background: #12c2e9;
	background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
	background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
	animation: ${blobBehavior} 5s linear infinite;
	position: absolute;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;
`;
