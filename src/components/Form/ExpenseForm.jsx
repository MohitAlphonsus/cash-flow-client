import { useState } from 'react';
import { Input, Textarea } from '../../UI';

export default function ExpenseForm() {
	const [formData, setFormData] = useState({
		category: '',
		amount: '',
		date: '',
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
			category: '',
			amount: '',
			date: '',
			note: '',
		});
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					label="Category"
					name="category"
					placeholder="eg. Food, Groceries, Clothing"
					value={formData.category}
					onChange={handleChange}
				/>
				<Input
					type="number"
					label="Amount Spent"
					name="amount"
					placeholder="Enter amount spent"
					value={formData.amount}
					onChange={handleChange}
				/>

				<Input
					type="date"
					label="Date"
					name="date"
					value={formData.date}
					onChange={handleChange}
				/>
				<Textarea
					label="Note"
					name="note"
					placeholder="Enter your note - paid by card, paid by cash etc"
					value={formData.note}
					onChange={handleChange}
				/>
				<button className="btn--primary">Add Expense</button>
			</form>
		</div>
	);
}
