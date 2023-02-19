import styled from 'styled-components';

interface BurgerProps {
	open: boolean;
}

export const MobileHeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 10vh;
	justify-content: flex-start;
	align-items: center;
	padding: 0 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	backdrop-filter: blur(5rem);
`;

export const BurgerMenu = styled.button<BurgerProps>`
	height: 100%;
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	span {
		height: 0.2rem;
		border-radius: 0.2rem;
		background-color: #fff;

		position: ${(props) => (props.open ? 'absolute' : 'unset')};
	}
	span:first-of-type {
		width: 5rem;
		transition: all 250ms;
		transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
	}
	span:nth-of-type(2) {
		transition: width 1s;
		width: ${(props) => (props.open ? '0' : '8rem')};
		opacity: ${(props) => (props.open ? '0' : '1')};
	}
	span:last-of-type {
		transition: all 250ms;
		width: ${(props) => (props.open ? '5rem' : '6rem')};
		transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
`;

export const BurgerMenuClose = styled.button`
	height: 100%;
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	span {
		height: 0.2rem;
		border-radius: 0.2rem;
		background-color: #fff;
		transition: all 450ms;
		position: absolute;
		width: 5rem;
	}

	span:first-of-type {
		transform: rotate(45deg);
	}

	span:last-of-type {
		transform: rotate(-45deg);
	}
`;

export const MobileNavWrapper = styled.nav``;
