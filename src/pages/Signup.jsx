import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { Logo, Input } from '../UI';

export default function Signup() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [successful, setSuccessful] = useState(false);
	const navigate = useNavigate();

	const { error, loading, onSignup } = useAuth();

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const success = await onSignup(
			formData.name,
			formData.email,
			formData.password,
		);
		setSuccessful(success);
		if (success) {
			setTimeout(() => navigate('/signin'), 1000);
		}
		setFormData({
			name: '',
			email: '',
			password: '',
		});
	}
	return (
		<section className="section-form  ">
			<div className="form-container">
				<Logo className="text-center mb-8" />
				<h2>Start Tracking Smarter</h2>

				<form onSubmit={handleSubmit}>
					<Input
						label="Name"
						name="name"
						type="text"
						placeholder="Enter your name"
						value={formData.name}
						onChange={handleChange}
					/>

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
						{loading ? 'Creating...' : 'Sign Up'}
					</button>
					<p className="error-message">{error}</p>
					<p className="success-message">
						{successful ? 'Account created successfully' : ''}
					</p>
					<p className="text-center text-sm">
						<span className="opacity-75">Already have an account? </span>
						<Link
							to="/signin"
							className="font-bold text-blue-900 hover:text-blue-950"
						>
							Login here
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
