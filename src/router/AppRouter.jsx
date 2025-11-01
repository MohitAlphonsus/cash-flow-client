import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import {
	Dashboard,
	Home,
	Budget,
	Expenses,
	Subscriptions,
} from '../pages/Dashboard';
import ProtectedRoutes from '../components/ProtectedRoutes';
import { Signup, Signin } from '../pages';
import useAuth from '../hooks/useAuth';

export default function AppRouter() {
	const { loading, isAuthenticated } = useAuth();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-gray-600">
				Loading...
			</div>
		);
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" replace />
						) : (
							<Navigate to="/signin" replace />
						)
					}
				/>
				{!isAuthenticated && (
					<>
						<Route path="/signup" element={<Signup />} />
						<Route path="/signin" element={<Signin />} />
					</>
				)}

				<Route element={<ProtectedRoutes />}>
					<Route path="/dashboard" element={<Dashboard />}>
						<Route index element={<Home />} />
						<Route path="budget" element={<Budget />} />
						<Route path="expenses" element={<Expenses />} />
						<Route path="subscriptions" element={<Subscriptions />} />
					</Route>
				</Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
