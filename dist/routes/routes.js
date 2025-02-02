'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const config_1 = require('./config');
const csv_1 = require('./csv');
const template_1 = require('./template');
const build_1 = require('./build');
const register_1 = require('./register');
const user_1 = require('./user');
const routes = (app) => {
	config_1.default(app);
	csv_1.default(app);
	template_1.default(app);
	build_1.default(app);
	register_1.default(app);
	user_1.default(app);
};
exports.default = routes;
