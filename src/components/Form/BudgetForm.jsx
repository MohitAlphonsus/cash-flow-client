import { Input, Select } from '../../UI';
const months = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];

export default function BudgetForm() {
	return (
		<div className="form-container">
			<form>
				<Input
					type="number"
					label="Total Budget"
					name="totalBudget"
					placeholder="Enter your total budget"
				/>
				<Select label="Choose Month" name="month" options={months} />
			</form>
		</div>
	);
}
