// module.exports = {
// 	apps: [
// 		{
// 			name: "aws-codedeploy",
// 			script: "npx",
// 			args: "serve -s build -l 3000 -n",
// 			interpreter: "none",
// 			env: {
// 				NODE_ENV: "development",
// 			},
// 		},
// 	],
// };
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
