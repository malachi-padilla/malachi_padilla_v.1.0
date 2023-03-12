import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest, MailData } from './types/apiTypes';
// import nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// const OAuth2 = google.auth.OAuth2;
// import { MailData, MailOptionTypes, ExtendedNextApiRequest } from './types/apiTypes';
// const user = process.env.USER;
// const pass = process.env.PASSWORD;
// const clientId = process.env.CLIENT_ID;
// const clientSecret = process.env.CLIENT_SECRET;
// const refreshToken = process.env.REFRESH_TOKEN;
// const code = process.env.AUTH_CODE;

// export default async (req: ExtendedNextApiRequest<MailData>, res: NextApiResponse) => {
// 	const { name, email, message } = req.body;
// 	const oauth2Client = new OAuth2(clientId, clientSecret, 'https://developers.google.com/oauthplayground');
// 	oauth2Client.setCredentials({
// 		refresh_token: refreshToken,
// 	});
// 	const accessToken = await new Promise((resolve, reject) => {
// 		oauth2Client.getAccessToken((err, token) => {
// 			if (err) {
// 				reject('Failed to create access token :(');
// 			}
// 			resolve(token);
// 		});
// 	});
// 	const transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			type: 'OAuth2',
// 			user: user,
// 			clientId: clientId,
// 			clientSecret: clientSecret,
// 			refreshToken: refreshToken,
// 			accessToken: accessToken as string,
// 		},
// 		tls: {
// 			rejectUnauthorized: false,
// 		},
// 	});

// 	const mailOptions: MailOptionTypes = {
// 		from: user,
// 		to: email,
// 		subject: `Message from ${name}`,
// 		text: req.body.message + ' | Sent from: ' + email,
// 		html: `<div>${message}</div><p>Sent from:
// 		${email}</p>`,
// 	};

// 	transporter.sendMail(mailOptions, (err, info) => {
// 		if (err) {
// 			console.log(err);
// 			return res.status(500).json({ message: err });
// 		} else {
// 			console.log(info);
// 			return res.status(200).json({ message: info.accepted });
// 		}
// 	});
// };

const sendMail = async (req: ExtendedNextApiRequest<MailData>, res: NextApiResponse) => {
	const { name, email, message } = req.body;
	const url = 'https://hooks.zapier.com/hooks/catch/14584750/3ocnenp/';
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	const payLoad = JSON.stringify({
		data: {
			name: name,
			email: email,
			message: message,
		},
	});
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: payLoad,
	};

	fetch(url, requestOptions)
		.then(() => {
			return res.status(200).json({ message: 'message sent :)' });
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ message: 'message failed :(' });
		});
};

export default sendMail;
