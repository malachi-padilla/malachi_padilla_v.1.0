import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest, MailData } from './types/apiTypes';
import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

const sendMail = async (req: ExtendedNextApiRequest<MailData>, res: NextApiResponse) => {
	const { name, email, message } = req.body;
	const user = process.env.EMAIL_USER;
	const pass = process.env.EMAIL_PASS;
	const transporter = nodemailer.createTransport({
		service: 'SendinBlue',
		auth: {
			user: user,
			pass: pass,
		},
	});
	const mailOptions: Options = {
		from: user,
		to: user,
		subject: `Message from ${name}`,
		text: req.body.message + ' | Sent from: ' + email,
		html: `<div>${message}</div><p>Sent from:
			${email}</p>`,
		priority: 'high',
		replyTo: email,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
			return res.status(500).json({ message: err });
		} else {
			console.log(info);
			return res.status(200).json({ message: info.accepted });
		}
	});
};

export default sendMail;
