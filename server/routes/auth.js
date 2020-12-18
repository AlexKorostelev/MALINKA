const { Router } = require('express');
const User = require('../models/user');

const router = Router();

router.post('/login', async (req, res) => {

	const {name, password, email}  = req.body;

	const candidate = await User.findOne({email})

	if(password === candidate.password) {
		req.session.user = {email};
		req.session.isAuthenticated = true;
		req.session.save((err) => {
			if(err) {
				console.log(err);
			}
			return res.sendStatus(200)
		})
	}
})

module.exports = router;