import { useReducer, createContext, useEffect } from 'react';
import { userSignup, userSignin, userLogout } from '../api/authApi';

const AuthContext = createContext();

const initialState = {
	user: null,
	token: localStorage.getItem('token') || null,
	isAuthenticated: localStorage.getItem('token') ? true : false,
	loading: true,
	error: null,
};

function authReducer(state, action) {
	switch (action.type) {
		case 'AUTH_START':
			return { ...state, loading: true };
		case 'SIGNUP_SUCCESS':
			return { ...state, loading: false };
		case 'SIGNIN_SUCCESS':
			return {
				...state,
				loading: false,
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true,
			};
		case 'AUTH_SUCCESS':
			if (!state.loading) return state;
			return { ...state, loading: false };
		case 'AUTH_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'AUTH_ERROR_CLEAR':
			return { ...state, error: null };
		case 'LOGOUT':
			return {
				...state,
				user: null,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	// actions
	async function signup(name, email, password) {
		dispatch({ type: 'AUTH_START' });
		try {
			await userSignup(name, email, password);
			dispatch({ type: 'SIGNUP_SUCCESS' });
			return true;
		} catch (err) {
			dispatch({
				type: 'AUTH_ERROR',
				payload: err.response.data.message || err.message,
			});
		}
	}

	async function login(email, password) {
		dispatch({ type: 'AUTH_START' });
		try {
			const { success, user, token } = await userSignin(email, password);

			if (!success) {
				dispatch({
					type: 'AUTH_ERROR',
					payload: 'Invalid credentials or user not found',
				});
				return true;
			}
			localStorage.setItem('token', token);
			dispatch({ type: 'SIGNIN_SUCCESS', payload: { user, token } });
		} catch (err) {
			dispatch({
				type: 'AUTH_ERROR',
				payload: err.response.data.message || err.message,
			});
			setTimeout(() => dispatch({ type: 'AUTH_ERROR_CLEAR' }), 3000);
		}
	}

	function logout() {
		userLogout();
		dispatch({ type: 'LOGOUT' });
	}

	useEffect(function () {
		console.log('AuthProvider rendered');
		const token = localStorage.getItem('token');
		if (token) {
			dispatch({
				type: 'AUTH_SUCCESS',
				payload: { user: null, token },
			});
		} else {
			dispatch({ type: 'LOGOUT' });
		}

		dispatch({ type: 'AUTH_SUCCESS' });
	}, []);

	return (
		<AuthContext.Provider
			value={{ ...state, onSignup: signup, onLogin: login, onLogout: logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
