import { Input,  Textarea } from '../../UI';

export default function ExpenseForm() {
	return (
		<div className="form-container">
			<form>
				<Input
					type="text"
					label="Category"
					name="category"
					placeholder="eg. Food, Groceries, Clothing"
				/>
				<Input
					type="number"
					label="Amount Spent"
					name="amount"
					placeholder="Enter amount spent"
				/>

				<Input type="date" label="Date" name="date" />
				<Textarea
					label="Note"
					name="note"
					placeholder="Enter your note - paid by card, paid by cash etc"
				/>
			</form>
		</div>
	);
}
