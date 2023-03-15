import useMousePosition from '@/hooks/useMousePosition';
import useScrollPosition from '@/hooks/useScrollPosition';
import React from 'react';
import { Blob, BlurWrap } from './CursorBlob-css';

const CursorBlob = () => {
	const { clientX, clientY } = useMousePosition();
	const scrollPosition = useScrollPosition();

	return (
		<BlurWrap>
			<Blob top={clientY + scrollPosition} left={clientX}></Blob>
		</BlurWrap>
	);
};

export default CursorBlob;
