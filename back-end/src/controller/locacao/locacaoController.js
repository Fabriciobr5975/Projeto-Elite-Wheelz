import inserirLocacaoSerivce from "../../service/locacao/inserirLocacaoSerivce.js";
import alterarLocacaoService from "../../service/locacao/alterarLocacaoService.js";
import removerLocacaoService from "../../service/locacao/removerLocacaoService.js";
import listarLocacaoService from "../../service/locacao/listarLocacaoService.js";
import buscarLocacaoPorClienteService from "../../service/locacao/buscarLocacaoPorClienteService.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post("/locacao", async (req, resp) => {
    try {
        const locacao = req.body;
        const resposta = await inserirLocacaoSerivce(locacao);

        resp.send({
            id_inserido: resposta
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.put("/locacao/:id", async (req, resp) => {
    try {
        const idLocacao = req.params.id;
        const locacao = req.body;
        const resposta = await alterarLocacaoService(locacao, idLocacao);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.delete("/locacao/:id", async (req, resp) => {
    try {
        const idLocacao = req.params.id;
        const resposta = await removerLocacaoService(idLocacao);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/locacao", async (req, resp) => {
    try {
        const registros = await listarLocacaoService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/locacao/busca/cliente", async (req, resp) => {
    try {
        const cliente = req.query.cliente;
        const registro = await buscarLocacaoPorClienteService(cliente);

        resp.send(registro);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoints;