const express = require('express');
const response = require('../../network/response')
const router = express.Router();

const controller = require('./controller')


router.get('/', (req, res) => {

    const filterMessage = req.query.user || null;
    console.log(filterMessage);
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
})

router.post('/', (req, res) => {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalidad', 400, 'Error en el controlador')
        })

})

router.patch('/:id', (req, res) => {
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Error interno', 500, err);
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.paramas.id} eliminado`)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router