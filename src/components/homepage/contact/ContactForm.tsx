import { MailData } from '@/pages/api/types/apiTypes';
import { TextContainer } from '@/theme/layout/containers';
import { FancyTitle, PreTitle } from '@/theme/layout/typography';

import React, { useState } from 'react';
import {
	ButtonRow,
	ContactSection,
	ContentWrapper,
	CustomInput,
	CustomLabel,
	FormWrap,
	FromGroup,
	Loader,
	SubmitButton,
} from './ContactForm-css';

const ContactForm = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [sendLoader, setSendLoader] = useState<boolean>(false);

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setSendLoader(true);
		let data: MailData = {
			name,
			email,
			message,
		};
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					setSendLoader(false);
					setSubmitted(true);
					setName('');
					setEmail('');
					setMessage('');
				} else {
					setSendLoader(false);
					setError(true);
				}
			})
			.catch((err) => {
				if (err) {
					console.error(err);
					setSendLoader(false);
					setError(true);
				}
			});
	};

	return (
		<ContactSection id='contact'>
			<ContentWrapper>
				<TextContainer>
					<PreTitle>Contact</PreTitle>
					<FancyTitle>
						Hey 👋 , Let&apos;s Build Something <span>Awesome</span> Together.
					</FancyTitle>
				</TextContainer>
				<FormWrap onSubmit={(e: any) => handleSubmit(e)}>
					<FromGroup>
						<CustomLabel htmlFor='user_name'>Your Name</CustomLabel>
						<CustomInput
							type='text'
							id='user_name'
							placeholder='Your name'
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</FromGroup>
					<FromGroup>
						<CustomLabel htmlFor='user_email'>Your Email</CustomLabel>
						<CustomInput
							value={email}
							type='email'
							id='user_email'
							placeholder='Your Email'
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FromGroup>
					<textarea
						name='details'
						id='user_details'
						cols={30}
						rows={5}
						placeholder='Your message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}></textarea>
					<ButtonRow>
						<SubmitButton type='submit' value='Send it 🚀' />
					</ButtonRow>
					{sendLoader ? <Loader>Loading...</Loader> : <></>}
				</FormWrap>
			</ContentWrapper>
		</ContactSection>
	);
};

export default ContactForm;
