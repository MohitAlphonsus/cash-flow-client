import { Link } from 'react-router';
import { Logo, Input } from '../UI';

export default function Signup() {
	return (
		<section className="section-form  ">
			<div className="form-container">
				<Logo className="text-center mb-8" />
				<h2>Start Tracking Smarter</h2>

				<form action="#">
					<Input
						label="Name"
						name="name"
						type="text"
						placeholder="Enter your name"
					/>

					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="Enter your email"
					/>
					<Input
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
					/>
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
