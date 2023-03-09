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
