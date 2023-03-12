export const defineDesktopOrMobile: () => boolean = () => {
	if (window.innerWidth > 1024) {
		return true;
	} else {
		return false;
	}
};

export const scrollToTop = () => {
	const isBrowser = () => typeof window !== 'undefined';
	if (!isBrowser()) return;
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
