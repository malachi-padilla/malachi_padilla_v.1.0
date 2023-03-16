import CursorBlob from '@/components/cursorBlob/CursorBlob';
import ContactForm from '@/components/homepage/contact/ContactForm';
import Hero from '@/components/homepage/Hero';
import StorySection from '@/components/homepage/about/StorySection';
import { CommonSection, PageWrapper } from '@/theme/layout/containers';
import Head from 'next/head';
import TechStack from '@/components/homepage/techstack/TechStack';
import Projects from '@/components/homepage/projects/Projects';

export default function Home() {
	return (
		<>
			<Head>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1' />
				<title>Malachi Padilla | Frontend Software Engineer</title>
				<meta name='description' content='Full-Stack Software Engineer for hire'></meta>
			</Head>
			<PageWrapper>
				<Hero />
				<CommonSection id='about'>
					<StorySection />
					<TechStack />
				</CommonSection>
				<CommonSection id='projects'>
					<Projects />
				</CommonSection>
				<ContactForm />
				<CursorBlob />
			</PageWrapper>
		</>
	);
}
