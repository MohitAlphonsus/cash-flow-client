import BudgetForm from '../../components/Form/BudgetForm';
export default function Budget() {
	return (
		<div>
			<div className="section-container">
				<h2>Your Monthly Budget</h2>
				<p>Set spending limits and stay on track with your financial goals</p>
				<BudgetForm />
			</div>
		</div>
	);
}
