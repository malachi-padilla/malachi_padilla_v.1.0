export interface link {
	name: string;
	path: string;
}

export interface ScrollToOptions {
	left?: number;
	top?: number;
	behavior?: 'auto' | 'smooth';
}
