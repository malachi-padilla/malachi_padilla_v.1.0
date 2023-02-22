import CursorBlob from '@/components/cursorBlob/CursorBlob';
import ContactForm from '@/components/homepage/ContactForm';
import Hero from '@/components/homepage/Hero';
import { PageWrapper } from '@/theme/layout/containers';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1' />
				<title>Malachi Padilla | Full-Stack Software Engineer</title>
				<meta name='description' content='Full-Stack Software Engineer for hire'></meta>
			</Head>
			<PageWrapper>
				<Hero />
				<section id='about'></section>
				<section id='projects'></section>
				<ContactForm />
				<CursorBlob />
			</PageWrapper>
		</>
	);
}
