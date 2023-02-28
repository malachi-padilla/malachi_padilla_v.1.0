import { MailData } from '@/pages/api/types/apiTypes';
import React, { useState } from 'react';
import {
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
	const [nameFocused, setNameFocused] = useState<boolean>(false);
	const [emailFocused, setEmailFocused] = useState<boolean>(false);
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
				<h2>
					Let's Build Something <span>Awesome</span>
				</h2>
				<p>
					If you need a savvy frontend developer on your team, or need help getting your idea on the web, just reach out
					below. I'm excited to hear about your project and bring it to life!
				</p>
				<FormWrap onSubmit={(e: any) => handleSubmit(e)}>
					<FromGroup>
						<CustomLabel htmlFor='user_name' visible={nameFocused}>
							Your Name
						</CustomLabel>
						<CustomInput
							visible={nameFocused}
							type='text'
							id='user_name'
							placeholder='Your name'
							value={name}
							onFocus={() => setNameFocused(true)}
							onChange={(e) => setName(e.target.value)}
						/>
					</FromGroup>
					<FromGroup>
						<CustomLabel htmlFor='user_email' visible={emailFocused}>
							Your Email
						</CustomLabel>
						<CustomInput
							visible={emailFocused}
							value={email}
							type='email'
							id='user_email'
							placeholder='Your Email'
							onFocus={() => setEmailFocused(true)}
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
					<SubmitButton type='submit' />
				</FormWrap>
				{sendLoader ? <Loader>Loading...</Loader> : <></>}
			</ContentWrapper>
		</ContactSection>
	);
};

export default ContactForm;
