import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Input, Logo } from '../UI';
import { Link, useNavigate } from 'react-router';
export default function Signin() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { error, loading, onLogin } = useAuth();
	const navigate = useNavigate();

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		await onLogin(formData.email, formData.password);

		setFormData({
			email: '',
			password: '',
		});
	}

	return (
		<section className="section-form  ">
			<div className="form-container">
				<Logo className="text-center mb-8" />
				<h2>Good to See You Again!</h2>

				<form onSubmit={handleSubmit}>
					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={handleChange}
					/>

					<Input
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
						value={formData.password}
						onChange={handleChange}
					/>

					<button className="btn--primary">
						{loading ? 'Checking...' : 'Sign In'}
					</button>
					<p className="error-message">{error}</p>
					<p className="text-center text-sm">
						<span className="opacity-75">Don't have an account? </span>
						<Link
							to="/signup"
							className="font-bold text-blue-900 hover:text-blue-950"
						>
							SignUp here
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
