import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import {
	Dashboard,
	Home,
	Budget,
	Expenses,
	Subscriptions,
} from '../pages/Dashboard';
import { Signup, Signin } from '../pages';
export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/signin" replace />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<Home />} />
					<Route path="budget" element={<Budget />} />
					<Route path="expenses" element={<Expenses />} />
					<Route path="subscriptions" element={<Subscriptions />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
