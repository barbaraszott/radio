const APIResponse = [
	{ name: 'Putin FM', frequency: '66,6' },
	{ name: 'Dribbble FM', frequency: '101,2' },
	{ name: 'Doge FM', frequency: '99,4' },
	{
		name      : 'Ballads FM',
		frequency : '87,1',
		cover     : 'https://coolsilh.com/png-256/2167964-moon_001.png'
	},
	{ name: 'Maximum FM', frequency: '142,2' }
];

export const getStations = () => {
	console.log(`Let's call API!`);

	const mockedAPICall = new Promise((resolve, reject) => {
		// this reject is just for testing error handling
		// reject(new Error('ERROR!'));
		setTimeout(() => resolve(APIResponse), 500);
	});

	return mockedAPICall;
};
