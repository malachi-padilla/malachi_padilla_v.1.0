import React from 'react';
import Footer from './footer/Footer';
import MobileHeader from './header/MobileHeader';

const Layout = ({ children }: any) => {
	return (
		<>
			<MobileHeader />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
