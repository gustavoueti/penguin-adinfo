'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const AuthDAO_1 = require('../models/DAO/AuthDAO');
const register = (app) => {
	app.post('/register', (req, res) => {
		const agency = req.headers.agency;
		const company = req.headers.company;
		const token = req.headers.token;
		const permission = req.headers.permission;
		if ((!agency && permission === 'agency') || !company || !permission) {
			res.status(500).send({ message: 'Parâmetros incorretos!' });
			return;
		}
		const jsonPermission = {
			permission,
		};
		if (permission === 'agency') {
			jsonPermission.agency = agency;
		}
		const authDAO = new AuthDAO_1.AuthDAO(company, token);
		authDAO
			.addAuth(jsonPermission)
			.then((token) => {
				res.status(200).send(
					`Permissão adicionada para a empresa ${company}, token: ${token}`
				);
			})
			.catch((err) => {
				res.status(500).send('Falha ao criar permissão!');
			});
	});
};
exports.default = register;