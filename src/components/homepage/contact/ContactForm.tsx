import { MailData } from '@/pages/api/types/apiTypes';
import { CustomInput, CustomLabel, CustomtextArea, SubmitButton } from '@/theme/components/webComponents';
import React, { useState } from 'react';
import { ButtonRow, FormWrap, FromGroup, LoadingSkeleton } from './ContactForm-css';
import FormMessage from './FormMessage';

const ContactForm = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [formState, setFormState] = useState<string>('');

	const handleInitialState = () => {
		setTimeout(() => {
			setFormState('');
		}, 10000);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setFormState('loading');
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
					setFormState('success');
					setName('');
					setEmail('');
					setMessage('');
					handleInitialState();
				} else {
					setFormState('error');
					handleInitialState();
				}
			})
			.catch((err) => {
				if (err) {
					console.error(err);
					setFormState('error');
					handleInitialState();
				}
			});
	};

	if (formState === 'loading') {
		return (
			<FormWrap>
				<LoadingSkeleton>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</LoadingSkeleton>
			</FormWrap>
		);
	}

	if (formState == 'error' || formState == 'success') {
		return (
			<>
				<FormWrap>
					<FormMessage formState={formState} />
				</FormWrap>
			</>
		);
	} else
		return (
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
				<CustomtextArea
					name='details'
					id='user_details'
					cols={30}
					rows={5}
					placeholder='Your message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}></CustomtextArea>
				<ButtonRow>
					<SubmitButton type='submit' value='Send it 🚀' />
				</ButtonRow>
			</FormWrap>
		);
};

export default ContactForm;
