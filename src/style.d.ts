import 'styled-components';
interface ITypographyTheme {
	primary: string;
}
declare module 'styled-components' {
	export interface DefaultTheme {
		primary: string;
		secondary: string;
		tertiary: string;
		typography: ITypographyTheme;
		yellow: string;
		purple: string;
		cyan: string;
	}
}
