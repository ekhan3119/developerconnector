const express = require('express');
const router = express.Router();


//@routes        Get api/users/test
// @description  Test users routes
//@access        Public
router.get('/test', (req, res) => res.json({ msg: " Users Works" }));

module.exports = router;