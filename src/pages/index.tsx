import CursorBlob from '@/components/cursorBlob/CursorBlob';
import Hero from '@/components/homepage/Hero';
import { PageInner, PageWrapper } from '@/theme/layout/containers';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1' />
				<title>Malachi Padilla | Frontend Software Engineer</title>
				<meta name='description' content='Front-end Software Engineer'></meta>
			</Head>
			<PageWrapper>
				<PageInner>
					<Hero />
				</PageInner>
				<CursorBlob />
			</PageWrapper>
		</>
	);
}
