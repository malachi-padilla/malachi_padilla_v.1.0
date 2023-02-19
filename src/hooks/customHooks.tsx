import { useState, useEffect } from 'react';

const useMousePosition = () => {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});

	const updatePosition = (event: any) => {
		const { pageX, pageY, clientX, clientY } = event;

		setPosition({
			clientX,
			clientY,
		});
	};

	useEffect(() => {
		document.addEventListener('pointermove', updatePosition, false);
		document.addEventListener('mouseenter', updatePosition, false);

		return () => {
			document.removeEventListener('pointermove', updatePosition);
			document.removeEventListener('mouseenter', updatePosition);
		};
	}, []);

	return position;
};

export default useMousePosition;