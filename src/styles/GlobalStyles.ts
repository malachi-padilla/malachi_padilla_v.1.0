import { createGlobalStyle } from 'styled-components';
import { Rubik } from '@next/font/google';
const font = Rubik({ subsets: ['latin'] });
import '@fontsource/ia-writer-mono';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

* {
	margin: 0;
	/* padding: 0; */
}

html,
body {
	height: 100%;
}


html {
	font-size: 62.5%;
	scroll-behavior: smooth;
}


body {
	line-height: 1.1;
	-webkit-font-smoothing: antialiased;
	font-family: ${font.style.fontFamily};
	background-color: ${(props) => props.theme.primary};
	overflow-x: hidden;
	color: ${(props) => props.theme.typography.primary};
	&::-webkit-scrollbar{
		display: none;
	}
	
}




img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
	border:none;
	outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: ${(props) => props.theme.typography.primary};;
  color: ${(props) => props.theme.typography.primary};;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

button{
	border:none;
	background:none;
	outline: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

ul{
	list-style: none;
	padding: 0;
}

a{
	text-decoration: none;
	color: inherit;
}

#root,
#__next {
	isolation: isolate;
}

`;
