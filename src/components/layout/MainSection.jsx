import { Outlet } from 'react-router';
export default function MainSection() {
	return <main className="main">{<Outlet />}</main>;
}
