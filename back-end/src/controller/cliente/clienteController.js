import inserirClienteService from "../../service/cliente/inserirClienteService.js";
import alterarClienteService from "../../service/cliente/alterarClienteService.js";
import removerClienteService from "../../service/cliente/removerClienteService.js";
import listarClienteService from "../../service/cliente/listarClienteService.js";
import buscarClienteCPF from "../../service/cliente/buscarClienteCPF.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post("/cliente", async (req, resp) => {
    try {
        const cliente = req.body;
        const resposta = await inserirClienteService(cliente);

        resp.send({
            id_inserido: resposta
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.put("/cliente/:id", async (req, resp) => {
    try {
        const idCliente = req.params.id;
        const cliente = req.body;
        const resposta = await alterarClienteService(cliente, idCliente);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.delete("/cliente/:id", async (req, resp) => {
    try {
        const idCliente = req.params.id;
        const resposta = await removerClienteService(idCliente);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/cliente", async (req, resp) => {
    try {
        const registros = await listarClienteService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/cliente/busca", async (req, resp) => {
    try {
        const cpf = req.query.cpf;
        const registro = await buscarClienteCPF(cpf);

        resp.send(registro);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

export default endpoints;