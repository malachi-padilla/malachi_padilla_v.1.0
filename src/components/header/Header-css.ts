import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 10vh;
	justify-content: flex-start;
	align-items: center;
	padding: 0 7rem;
`;

export const HeaderLeft = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const HeaderRight = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const LinkList = styled.ul`
	height: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 3.2rem;
`;

export const LinkItem = styled.li`
	font-size: 1.6rem;
`;
