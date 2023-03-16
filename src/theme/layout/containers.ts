import styled from 'styled-components';

export const PageWrapper = styled.main`
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CommonSection = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	gap: 10rem;
	margin-bottom: 10rem;
`;

export const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 100%;
	flex-grow: 1;
	width: 100%;
	gap: 1.6rem;
`;

export const HeaderWrapper = styled.nav`
	display: flex;
	width: 100%;
	height: 7rem;
	justify-content: flex-start;
	align-items: center;
	padding: 0 4rem;
`;
