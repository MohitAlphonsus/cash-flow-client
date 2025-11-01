import FormGroup from './FormGroup';

export default function Select({ label, name, options, value, onChange }) {
	return (
		<FormGroup htmlFor={name} label={label}>
			<select name={name} onChange={onChange} value={value}>
				{options.map(option => (
					<option key={option.label} value={option.value}>
						{option.label.charAt(0).toUpperCase() + option.label.slice(1)}
					</option>
				))}
			</select>
		</FormGroup>
	);
}
