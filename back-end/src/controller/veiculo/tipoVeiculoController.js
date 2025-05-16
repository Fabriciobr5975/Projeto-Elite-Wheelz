import inserirTipoVeiculoService from "../../service/tipoVeiculo/inserirTipoVeiculoService.js";
import alterarTipoVeiculoService from "../../service/tipoVeiculo/alterarTipoVeiculoService.js";
import removerTipoVeiculoService from "../../service/tipoVeiculo/removerTipoVeiculoService.js";
import listarTipoVeiculoService from "../../service/tipoVeiculo/listarTipoVeiculoService.js";
import buscarTipoVeiculoService from "../../service/tipoVeiculo/buscarTipoVeiculoService.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post("/tipoveiculo", async (req, resp) => {
    try {
        const tipoVeiculo = req.body;
        const resposta = await inserirTipoVeiculoService(tipoVeiculo);

        resp.send({
            id_inserido: resposta
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.put("/tipoveiculo/:id", async (req, resp) => {
    try {
        const idTipoVeiculo = req.params.id;
        const tipoVeiculo = req.body;
        const resposta = await alterarTipoVeiculoService(tipoVeiculo, idTipoVeiculo);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.delete("/tipoveiculo/:id", async (req, resp) => {
    try {
        const idTipoVeiculo = req.params.id;
        const resposta = await removerTipoVeiculoService(idTipoVeiculo);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/tipoveiculo", async (req, resp) => {
    try {
        const registros = await listarTipoVeiculoService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/tipoveiculo/busca", async (req, resp) => {
    try {
        const tipo = req.query.tipo;
        const registro = await buscarTipoVeiculoService(tipo);

        resp.send(registro);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoints;