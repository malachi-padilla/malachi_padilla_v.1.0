import useMousePosition from '@/hooks/customHooks';
import React, { useState } from 'react';
import { Blob, BlurWrap } from './CursorBlob-css';

const CursorBlob = () => {
	const { clientX, clientY } = useMousePosition();

	return (
		<BlurWrap top={clientY} left={clientX}>
			<Blob></Blob>
		</BlurWrap>
	);
};

export default CursorBlob;
