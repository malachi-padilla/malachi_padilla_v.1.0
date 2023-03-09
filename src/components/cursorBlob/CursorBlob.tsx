import useMousePosition from '@/hooks/customHooks';
import React, { useState } from 'react';
import { Blob, BlurWrap } from './CursorBlob-css';

const CursorBlob = () => {
	const { clientX, clientY } = useMousePosition();

	return (
		<BlurWrap>
			<Blob top={clientY} left={clientX}></Blob>
		</BlurWrap>
	);
};

export default CursorBlob;
