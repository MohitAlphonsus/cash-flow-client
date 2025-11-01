import SubscriptionForm from '../../components/Form/SubscriptionForm';
export default function Subscriptions() {
	return (
		<div>
			<div className="section-container">
				<h2>Stay in Control of Your Subscriptions</h2>
				<p>Manage recurring payments and avoid unexpected renewals.</p>
				<SubscriptionForm />
			</div>
		</div>
	);
}
