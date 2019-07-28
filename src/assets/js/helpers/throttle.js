export default (fn, time = 250) => {
	// SRC: https://github.com/tuxsudo/es6y-throttle
	let timer = null;

	function throttledFn(...args) {
		if (!timer) {
			timer = setTimeout(() => {
				fn(...args);
				timer = null;
			}, time);
		}
	}

	throttledFn.cancel = () => {
		clearTimeout(timer);
		timer = null;
	};

	return throttledFn();
};
