import CursorBlob from '@/components/cursorBlob/CursorBlob';
import ContactForm from '@/components/homepage/contact/ContactForm';
import Hero from '@/components/homepage/Hero';
import StorySection from '@/components/homepage/about/StorySection';
import { CommonSection, PageWrapper, TextContainer } from '@/theme/layout/containers';
import Head from 'next/head';
import TechStack from '@/components/homepage/techstack/TechStack';
import Projects from '@/components/homepage/projects/Projects';
import { ContactSection, ContentWrapper } from '@/components/homepage/contact/ContactForm-css';
import { FancyTitle, PreTitle } from '@/theme/typography/typography';

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
				<ContactSection id='contact'>
					<ContentWrapper>
						<TextContainer>
							<PreTitle>Contact</PreTitle>
							<FancyTitle>
								Let&apos;s Build Something <span>Awesome</span> Together.
							</FancyTitle>
						</TextContainer>
						<ContactForm />
					</ContentWrapper>
				</ContactSection>
				<CursorBlob />
			</PageWrapper>
		</>
	);
}
