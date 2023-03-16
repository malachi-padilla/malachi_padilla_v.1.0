import Layout from '@/components/Layout';
import { GlobalStyle } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '@/theme/theme';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
	return (
		<>
			<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
				<GlobalStyle />
				<Layout isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
