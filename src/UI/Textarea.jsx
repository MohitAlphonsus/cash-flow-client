import FormGroup from './FormGroup';
export default function Textarea({
	name,
	label,
	value,
	placeholder,
	onChange,
}) {
	return (
		<FormGroup label={label} htmlFor={name}>
			<textarea
				rows={3}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</FormGroup>
	);
}
