import { NavLink } from 'react-router';
import { Logo } from '../../UI';

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<Logo />
			<nav>
				<NavLink to="/dashboard" end>
					Home
				</NavLink>
				<NavLink to="budget">Budget</NavLink>
				<NavLink to="expenses">Expenses</NavLink>
				<NavLink to="subscriptions">Subscriptions</NavLink>
			</nav>
		</aside>
	);
}
