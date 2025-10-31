import { Link } from 'react-router';
import { Logo } from '../UI';


export default function Signup() {
	return (
		<section className="section-form  ">
			<div className="form-container">
				<Logo className="text-center mb-8" />
				<h2>Start Tracking Smarter</h2>

				<form action="#">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
						/>
					</div>
					<button className="btn--primary">Sign Up</button>
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
