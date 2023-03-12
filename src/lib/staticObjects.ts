import { IProjectList, ITechList, link } from '@/types/staticTypes';
import WindPreview from '@/assets/wind-1.png';

export const navLinks: link[] = [
	{ name: 'About', path: '#about' },
	{ name: 'Projects', path: '#projects' },
	{ name: 'Contact', path: '#contact' },
];

export const techStackList: ITechList[] = [
	{
		technologie: 'Next.js',
		stackPosition: 1,
		techInfo:
			'Next.js is a React meta-framework that provides Serve-Side Rendering (SSR), which improves page load times and SEO by rendering pages on the server and sending them as HTML to the client. Another thing I like about Next.js is that it simplifies the routing process by providing client-side routing out of the box!',
	},
	{
		technologie: 'React',
		stackPosition: 2,
		techInfo:
			'React is a Javascript library that revolves heavily around component-Based architecture, making reusable components easy to code, scale, and maintain. React is special because it uses what is called the virtual DOM, a lightweight copy of the real DOM, that allows it make updates while reducing the number of direct manipulations to the DOM. React is very popular and the community behind it is awesome!',
	},
	{
		technologie: 'Typescript',
		stackPosition: 3,
		techInfo:
			'Typescript is a superset of Javascript that adds optional static typing, classes, and interfaces to the language. This is purely a developer dependency for me as it adds an extra level of organization, enhances my IDE support, and makes the debugging process much faster! Use Typescript!',
	},
	{
		technologie: 'Javascript',
		stackPosition: 4,
		techInfo:
			"Javascript is a high-level COMPILED programming language. JavaScript code is executed on the client side, meaning that it runs directly in the user's web browser, rather than on a server. This allows for a more responsive and interactive user experience. Its intent is to make the web a little more interactive. This was my first language and it holds a special place in my heart",
	},
	{
		technologie: 'Node.js',
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
