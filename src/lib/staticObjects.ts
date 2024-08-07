import { IProjectList, ITechList, link } from '@/types/staticTypes';
import WindPreview from '@/assets/wind-1.png';

export const navLinks: link[] = [
	{ name: 'About', path: '/#about' },
	{ name: 'Projects', path: '/#projects' },
	{ name: 'Contact', path: '/#contact' },
];

export const techStackList: ITechList[] = [
	{
		technology: 'Next.js',
		stackPosition: 1,
		techInfo:
			"I absolutely love using Next.js! As a React developer, it's a game-changer because it significantly speeds up website loading times and boosts SEO by rendering pages on the server and sending them as HTML to the client. But what really sets it apart for me is the built-in client-side routing feature, which makes it so much easier to navigate between pages without all the hassle of manual routing. With Next.js, I can focus on building an amazing website without worrying about slow loading times or complicated routing setups",
	},
	{
		technology: 'React',
		stackPosition: 2,
		techInfo:
			"React is my go-to library as a Javascript developer because of its component-based architecture, which makes coding, scaling, and maintaining reusable components a breeze. What really distinguishes React is its use of the virtual DOM, which is essentially a lightweight copy of the real DOM. This enables seamless updates while minimizing direct DOM manipulations, which can be a real pain in other frameworks. But what I adore about React is its amazing community! It's inspiring to be a part of a community of talented developers who are constantly pushing the boundaries of what's possible with this library.",
	},
	{
		technology: 'Typescript',
		stackPosition: 3,
		techInfo:
			'Typescript is a superset of Javascript that adds optional static typing, classes, and interfaces to the language. This is purely a developer dependency for me as it adds an extra level of organization, enhances my IDE support, and makes the debugging process much faster! Use Typescript!',
	},
	{
		technology: 'Javascript',
		stackPosition: 4,
		techInfo:
			"Javascript is a high-level compiled programming language. JavaScript code is executed on the client side, meaning that it runs directly in the user's web browser, rather than on a server. This allows for a more responsive and interactive user experience. Its intent is to make the web a little more interactive. This was my first language and it holds a special place in my heart",
	},
	{
		technology: 'Node.js',
		stackPosition: 5,
		techInfo:
			"Okay, Node.js is rad. You thought Javascript could only run on the browser right? Wrong. Making use of Chrome's V8 engine, Node.js is a Javascript run time environment that lets you write server-side code in Javascript!! 🥳 Now I don't need to learn PHP",
	},
];

export const projectList: IProjectList[] = [
	{
		name: 'wind chat app',
		description: "A minimal discord clone. Users can find friends, see who's online, and exchange direct messages",
		tech: ['react', 'typescript', 'styled components', 'electron', 'socket.io'],
		preview: WindPreview,
		link: 'https://github.com/malachi-padilla/wind-frontend',
	},
];
