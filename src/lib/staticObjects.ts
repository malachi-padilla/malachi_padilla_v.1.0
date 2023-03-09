import { ITechList, link } from '@/types/staticTypes';

export const navLinks: link[] = [
	{ name: 'About', path: '#about' },
	{ name: 'Projects', path: '#projects' },
	{ name: 'Contact', path: '#contact' },
];

export const techStackList: ITechList[] = [
	{ technologie: 'Next.js', stackPosition: 1, techInfo: 'Some info on Next.js' },
	{ technologie: 'React', stackPosition: 2, techInfo: 'Some info on React' },
	{ technologie: 'Typescript', stackPosition: 3, techInfo: 'Some info on Typescript' },
	{ technologie: 'Javascript', stackPosition: 4, techInfo: 'Some info on Javascript' },
	{ technologie: 'Node.js', stackPosition: 5, techInfo: 'Some info on Node.js' },
];
