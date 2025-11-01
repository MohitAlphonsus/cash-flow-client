const subStatusOptions = [
	{
		value: '',
		label: 'Choose Status',
	},
	{
		value: 'active',
		label: 'Active',
	},
	{
		value: 'inactive',
		label: 'Inactive',
	},
];

const subFrequencyOptions = [
	{ value: '', label: 'Choose Frequency' },
	{
		value: 'monthly',
		label: 'Monthly',
	},
	{
		value: 'yearly',
		label: 'Yearly',
	},
];

const months = [
	{ value: '', label: 'Choose Month' },
	{ value: 'january', label: 'January' },
	{ value: 'february', label: 'February' },
	{ value: 'march', label: 'March' },
	{ value: 'april', label: 'April' },
	{ value: 'may', label: 'May' },
	{ value: 'june', label: 'June' },
	{ value: 'july', label: 'July' },
	{ value: 'august', label: 'August' },
	{ value: 'september', label: 'September' },
	{ value: 'october', label: 'October' },
	{ value: 'november', label: 'November' },
	{ value: 'december', label: 'December' },
];

export { subStatusOptions, subFrequencyOptions, months };
