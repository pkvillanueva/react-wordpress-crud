export const required = value => {
	return value === undefined ? 'This is a required field.' : undefined;
};

export const email = value => {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address.'
		: undefined;
};

export const minLen = min => value => {
	return value && value.length < min ? `Must be at least ${min}.` : undefined;
};

export const phoneCount = minLen(10);
