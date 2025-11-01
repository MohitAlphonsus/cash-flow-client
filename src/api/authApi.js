import axiosInstance from './axiosInstance';

const userSignup = async (name, email, password) => {
	const res = await axiosInstance.post('/users/signup', {
		name,
		email,
		password,
	});
	return res.data;
};

const userSignin = async (email, password) => {
	const res = await axiosInstance.post('/users/login', { email, password });
	return res.data;
};

const userLogout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user');
	return { success: true };
};

export { userSignup, userSignin, userLogout };
