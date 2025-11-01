import FormGroup from './FormGroup';

export default function Input({
	label,
	name,
	type,
	value,
	placeholder = '',
	onChange,
}) {
	return (
		<FormGroup label={label} htmlFor={name}>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</FormGroup>
	);
}
