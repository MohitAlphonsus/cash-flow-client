import FormGroup from './FormGroup';

export default function Select({ label, name, options, onChange }) {
	return (
		<FormGroup htmlFor={name} label={label}>
			<select name={name} onChange={onChange}>
				{options.map(option => (
					<option key={option} value={option}>
						{option.charAt(0).toUpperCase() + option.slice(1)}
					</option>
				))}
			</select>
		</FormGroup>
	);
}
