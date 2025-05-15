import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import adicionarRotas from './routers.js';

const servidor = express();
servidor.use(express.json());
servidor.use(cors())

const PORTA = process.env.PORTA

adicionarRotas(servidor);

servidor.listen(
    PORTA,
    () => console.log(`API subiu na porta ${PORTA} com sucesso`));