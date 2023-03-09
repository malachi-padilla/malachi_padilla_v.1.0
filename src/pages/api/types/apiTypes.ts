import { NextApiRequest } from 'next';

export interface MailData {
	name: string;
	email: string;
	message: string;
}

export interface ExtendedNextApiRequest<T> extends NextApiRequest {
	body: T;
}

export interface MailOptionTypes {
	from: string | undefined;
	to: string | undefined;
	subject: string | undefined;
	text: string | undefined;
	html: string | undefined;
}
