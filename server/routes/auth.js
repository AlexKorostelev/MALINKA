const { Router } = require('express');
const User = require('../models/user');
const sha256 = require('sha256')

const router = Router();

router.post('/login', async (req, res) => {
	const {name, password, email}  = req.body;

	const candidate = await User.findOne({email})

	if(sha256(password) === candidate.password) {
		req.session.user = {email};
		req.session.isAuthenticated = true;
		req.session.save((err) => {
			if(err) {
				console.log(err);
			}
		})
		return res.sendStatus(200)
	}
})

router.post('/register', async (req, res) => {
  try {
    const {
      email, password, homes, name, tgLogin
    } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
			res.sendStatus(400);	
    } else {
      const user = new User({
        email, password: sha256(password), homes, name, tgLogin
			}).save();
      res.json(user);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.sendStatus(200);
	});
})

module.exports = router;