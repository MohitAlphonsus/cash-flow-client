import { Input, Select, Textarea } from '../../UI';

export default function SubscriptionForm() {
	return (
		<div className="form-container">
			<form>
				<Input
					type="text"
					label="Subscription Name"
					name="subscription-name"
					placeholder="Enter subscription name"
				/>
				<Input
					type="number"
					label="Subscription Amount"
					name="subscription-amount"
					placeholder="Enter your subscription amount"
				/>
				<Input type="date" label="Renewal Date" name="renewal-date" />
				<Select
					label="Frequency"
					name="frequency"
					options={['monthly', 'yearly']}
				/>
				<Select label="Status" name="status" options={['active', 'inactive']} />
				<Textarea label="Note" name="note" placeholder="Enter your note" />
			</form>
		</div>
	);
}
