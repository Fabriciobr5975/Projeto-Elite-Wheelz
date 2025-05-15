import inserirVeiculoService from "../../service/veiculo/inserirVeiculoService.js";
import alterarVeiculoService from "../../service/veiculo/alterarVeiculoService.js";
import removerVeiculoService from "../../service/veiculo/removerVeiculoService.js";
import listarVeiculoService from "../../service/veiculo/listarVeiculoService.js";
import buscarVeiculoPorPlacaService from "../../service/veiculo/buscarVeiculoPorPlacaService.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post("/veiculo", async (req, resp) => {
    try {
        const veiculo = req.body;
        const resposta = await inserirVeiculoService(veiculo);

        resp.send({
            id_inserido: resposta
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.put("/veiculo/:id", async (req, resp) => {
    try {
        const idVeiculo = req.params.id;
        const veiculo = req.body;
        const resposta = await alterarVeiculoService(veiculo, idVeiculo);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.delete("/veiculo/:id", async (req, resp) => {
    try {
        const idVeiculo = req.params.id;
        const resposta = await removerVeiculoService(idVeiculo);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/veiculo", async (req, resp) => {
    try {
        const registros = await listarVeiculoService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

endpoints.get("/veiculo/:placa", async (req, resp) => {
    try {
        const placa = req.params.placa;
        const registro = await buscarVeiculoPorPlacaService(placa);

        resp.send(registro);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoints;