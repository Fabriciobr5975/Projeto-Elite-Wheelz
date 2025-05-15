import connection from "../connection.js";

export async function inserirTipoVeiculo(tipoVeiculo) {
  const comando = `INSERT INTO tb_tipo_veiculo (
                        DS_TIPO)
                    VALUES (?)`;
  const [respota] = await connection.query(comando, [tipoVeiculo.tipo]);

  return respota.insertId;
}

export async function alterarTipoVeiculo(tipoVeiculo, id) {
  const comando = `UPDATE tb_tipo_veiculo SET 
                        DS_TIPO = ?
                    WHERE ID_TIPO_VEICULO = ?`;
  const [respota] = await connection.query(comando, [tipoVeiculo.tipo, id]);

  return respota.affectedRows;
}

export async function deletarTipoVeiculo(id) {
  const comando = `DELETE FROM tb_tipo_veiculo WHERE ID_TIPO_VEICULO = ?`;

  const [respota] = await connection.query(comando, [id]);

  return respota.affectedRows;
}

export async function listarTipoVeiculo() {
  const comando = `SELECT * FROM tb_tipo_veiculo`;

  const [registro] = await connection.query(comando);

  return registro;
}

export async function buscarTipoVeiculo(tipo) {
  const comando = `SELECT * FROM tb_tipo_veiculo WHERE DS_TIPO = ?`;

  const [registro] = await connection.query(comando, [tipo]);

  return registro;
}
