module.exports = {
	apps: [
		{
			name: "NextjsApp",
			script: "npm",
			args: "start",
			env: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
			time: true,
		},
	],
};
