import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 7rem);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10rem 5rem;
	@media (max-width: 820px) {
		padding: 10rem 1.25rem;
	}
`;

export const PageInner = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1390px;
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
