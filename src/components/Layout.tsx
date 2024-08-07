import Header from './header/Header';

const Layout = ({ children, isDarkTheme, setIsDarkTheme }: any) => {
	return (
		<>
			<Header isDarkTheme={isDarkTheme as boolean} setIsDarkTheme={setIsDarkTheme} />
			<main>{children}</main>
		</>
	);
};

export default Layout;
