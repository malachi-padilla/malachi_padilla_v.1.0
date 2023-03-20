import React from 'react';
import { MessageBox } from './ContactForm-css';
import { FormMessageProps } from '@/types/staticTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const FormMessage = ({ formState }: FormMessageProps) => {
	return (
		<MessageBox formState={formState}>
			{formState == 'success' ? (
				<div>
					<h3>
						{formState}
						<FontAwesomeIcon icon={faCheckCircle} />
					</h3>
					<p>I&apos;ll be in touch shortly.</p>
				</div>
			) : (
				<div>
					<h3>
						{formState}
						<FontAwesomeIcon icon={faExclamationCircle} />
					</h3>
					<p>something went wrong.</p>
				</div>
			)}
		</MessageBox>
	);
};

export default FormMessage;
