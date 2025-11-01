import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router';
export default function ProtectedRoutes() {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}
