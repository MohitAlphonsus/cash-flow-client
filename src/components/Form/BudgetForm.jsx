import { useState } from 'react';
import { Input, Select } from '../../UI';
import { months } from '../../constants';

export default function BudgetForm() {
	const [formData, setFormData] = useState({
		totalBudget: '',
		month: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		console.log(formData);
		setFormData({ totalBudget: '', month: '' });
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<Input
					type="number"
					label="Total Budget"
					name="totalBudget"
					placeholder="Enter your total budget"
					value={formData.totalBudget}
					onChange={handleChange}
				/>
				<Select
					label="Choose Month"
					name="month"
					options={months}
					value={formData.month}
					onChange={handleChange}
				/>
				<button className="btn--primary">Add Budget</button>
			</form>
		</div>
	);
}
