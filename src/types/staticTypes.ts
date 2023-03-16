import { StaticImageData } from 'next/image';

export interface link {
	name: string;
	path: string;
}

export interface ScrollToOptions {
	left?: number;
	top?: number;
	behavior?: 'auto' | 'smooth';
}

export interface ITechList {
	technologie: string;
	stackPosition: number;
	techInfo: string;
}

export interface IProjectList {
	name: string;
	description: string;
	tech: string[];
	preview: StaticImageData;
	link?: string;
}

export interface ThemeSwitchProps {
	isDarkTheme?: boolean;
	setIsDarkTheme?: any;
}
