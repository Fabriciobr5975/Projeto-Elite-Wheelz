import express from 'express';
import adicionarRotas from './routers';

const servidor = express();

const PORTA = process.env.PORTA

adicionarRotas(servidor)

servidor.listen(
    PORTA,
    () => console.log(`API subiu na porta ${PORTA} com sucesso`));