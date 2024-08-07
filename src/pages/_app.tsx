import Layout from '@/components/Layout';
import { GlobalStyle } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={DarkTheme}>
				<Layout isDarkTheme>
					<GlobalStyle />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
