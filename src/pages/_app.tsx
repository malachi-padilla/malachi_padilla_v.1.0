import Layout from '@/components/Layout';
import { GlobalStyle } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
