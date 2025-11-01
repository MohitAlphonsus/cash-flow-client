import ExpenseForm from '../../components/Form/ExpenseForm';

export default function Expenses() {
	return (
		<div>
			<div className="section-container">
				<h2>Know Your Spending Habits</h2>
				<p>Track every transaction and understand where your money goes</p>
				<ExpenseForm />
			</div>
		</div>
	);
}
