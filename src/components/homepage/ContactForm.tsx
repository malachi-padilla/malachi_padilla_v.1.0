import React, { useState } from 'react';
import { ContactSection, ContentWrapper, CustomInput, CustomLabel, FormWrap, SubmitButton } from './ContactForm-css';

const ContactForm = () => {
	const [nameInput, setNameInput] = useState<boolean>(false);
	const [emailInput, setEmailInput] = useState<boolean>(false);
	return (
		<ContactSection id='contact'>
			<ContentWrapper>
				<h2>Get in Touch.</h2>
				<p>let's build something epic!</p>
				<FormWrap>
					<div>
						<CustomLabel htmlFor='user_name' visible={nameInput}>
							Your Name
						</CustomLabel>
						<CustomInput
							visible={nameInput}
							type='text'
							id='user_name'
							placeholder='Your name'
							onFocus={() => setNameInput(true)}
						/>
					</div>
					<div>
						<CustomLabel htmlFor='user_email' visible={emailInput}>
							Your Email
						</CustomLabel>
						<CustomInput
							visible={emailInput}
							type='email'
							id='user_email'
							placeholder='Your Email'
							onFocus={() => setEmailInput(true)}
						/>
					</div>
					<textarea name='details' id='user_details' cols={30} rows={5} placeholder='Your message'></textarea>
					<SubmitButton type='submit' />
				</FormWrap>
			</ContentWrapper>
		</ContactSection>
	);
};

export default ContactForm;
