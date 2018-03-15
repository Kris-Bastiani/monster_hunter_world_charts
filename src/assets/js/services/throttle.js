module.exports = function (cb, wait, context = this) {
	let timeout = null;
	let cbArgs = null;

	const later = () => {
		cb.apply(context, cbArgs);
		timeout = null;
	};

	return function() {
		if (timeout) return;

		cbArgs = arguments;
		timeout = setTimeout(later, wait);
	};
};
