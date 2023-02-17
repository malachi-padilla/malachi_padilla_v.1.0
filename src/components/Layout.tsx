import { screenWidthBoolean } from '@/util/utilFunctions';
import React, { useEffect, useState } from 'react';
import CursorBlob from './cursorBlob/CursorBlob';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileHeader from './header/mobile/MobileHeader';

const Layout = ({ children }: any) => {
	const [desktopScreenWidth, setDesktopScreenWidth] = useState<any | null>();

	useEffect(() => {
		setDesktopScreenWidth(screenWidthBoolean);
		const handleScreenWidthRender = () => {
			setDesktopScreenWidth(screenWidthBoolean);
		};
		window.addEventListener('resize', handleScreenWidthRender);
	}, []);
	return (
		<>
			{desktopScreenWidth ? (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
					<CursorBlob />
				</>
			) : (
				<>
					<MobileHeader />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</>
	);
};

export default Layout;
