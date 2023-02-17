export const screenWidthBoolean: () => boolean = () => {
	if (window.innerWidth >= 1024) {
		return true;
	} else {
		return false;
	}
};
