const express = require('express');
const { getAllUsers, getUserByUuid, updateUser, softDeleteUser, hardDeleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:uuid', getUserByUuid);
router.put('/:uuid', updateUser);
router.delete('/:uuid', softDeleteUser);
router.delete('/:uuid/hard', hardDeleteUser);

module.exports = router;