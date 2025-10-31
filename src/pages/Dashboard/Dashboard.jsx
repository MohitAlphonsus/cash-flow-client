import { Sidebar, MainSection } from '../../components/layout';

export default function Dashboard() {
	return (
		<section className="flex">
			<Sidebar />
			<MainSection />
		</section>
	);
}
