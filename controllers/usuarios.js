const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
