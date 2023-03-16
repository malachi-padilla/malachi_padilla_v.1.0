import React from 'react';
import Footer from './footer/Footer';
import MobileHeader from './header/MobileHeader';

const Layout = ({ children, isDarkTheme, setIsDarkTheme }: any) => {
	return (
		<>
			<MobileHeader isDarkTheme={isDarkTheme as boolean} setIsDarkTheme={setIsDarkTheme} />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
