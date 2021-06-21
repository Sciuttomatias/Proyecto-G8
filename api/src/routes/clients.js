const { Router } = require('express');
const router = Router();
const { getClients, addClient, deleteClient, getClientById, updateClient, loginClient} = require('../controllers/clients'); // updateClient

router.get('/:id', getClientById);
router.get('/', getClients);
router.put('/:id', updateClient);
router.post('/add', addClient);
router.delete('/:id', deleteClient);
router.post('/login',loginClient);

module.exports = router;