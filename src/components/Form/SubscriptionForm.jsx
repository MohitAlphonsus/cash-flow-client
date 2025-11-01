import { useState } from 'react';
import { Input, Select, Textarea } from '../../UI';
import { subStatusOptions, subFrequencyOptions } from '../../constants';

export default function SubscriptionForm() {
	const [formData, setFormData] = useState({
		subscriptionName: '',
		subscriptionAmount: '',
		renewalDate: '',
		frequency: '',
		status: '',
		note: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		console.log(formData);
		setFormData({
			subscriptionName: '',
			subscriptionAmount: '',
			renewalDate: '',
			frequency: '',
			status: '',
			note: '',
		});
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					label="Subscription Name"
					name="subscriptionName"
					placeholder="Enter subscription name"
					value={formData.subscriptionName}
					onChange={handleChange}
				/>
				<Input
					type="number"
					label="Subscription Amount"
					name="subscriptionAmount"
					placeholder="Enter your subscription amount"
					value={formData.subscriptionAmount}
					onChange={handleChange}
				/>
				<Input
					type="date"
					label="Renewal Date"
					name="renewalDate"
					value={formData.renewalDate}
					onChange={handleChange}
				/>
				<Select
					label="Frequency"
					name="frequency"
					options={subFrequencyOptions}
					value={formData.frequency}
					onChange={handleChange}
				/>
				<Select
					label="Status"
					name="status"
					options={subStatusOptions}
					value={formData.status}
					onChange={handleChange}
				/>
				<Textarea
					label="Note"
					name="note"
					placeholder="Enter your note"
					value={formData.note}
					onChange={handleChange}
				/>
				<button className="btn--primary">Add Subscription</button>
			</form>
		</div>
	);
}
