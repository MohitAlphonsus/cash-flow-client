import { Input, Logo } from '../UI';
import { Link } from 'react-router';
export default function Signin() {
	return (
		<section className="section-form  ">
			<div className="form-container">
				<Logo className="text-center mb-8" />
				<h2>Good to See You Again!</h2>

				<form action="#">
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
