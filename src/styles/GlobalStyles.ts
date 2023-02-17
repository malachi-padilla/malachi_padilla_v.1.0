import { createGlobalStyle } from 'styled-components';
import { Rubik } from '@next/font/google';
const rubik = Rubik({ subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

* {
	margin: 0;
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
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	font-family: ${rubik.style.fontFamily};
	background-color: #0b090a;
	color: #fff;
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
