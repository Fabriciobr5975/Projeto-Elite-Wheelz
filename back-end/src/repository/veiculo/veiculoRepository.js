import connection from "../connection.js";

export async function inserirVeiculo(veiculo) {
  const comando = `INSERT INTO tb_veiculo (
                        ID_TIPO_VEICULO,
                        DS_MODELO,
                        DS_MARCA,
                        DS_PLACA,
                        NR_ANO)
                    VALUES (?,?,?,?,?)`;
  const [respota] = await connection.query(comando, [
    veiculo.tipo,
    veiculo.modelo,
    veiculo.marca,
    veiculo.placa,
    veiculo.ano,
  ]);

  return respota.insertId;
}

export async function alterarVeiculo(veiculo, id) {
  const comando = `UPDATE tb_veiculo SET
                        ID_TIPO_VEICULO = ?,
                        DS_MODELO = ?,
                        DS_MARCA = ?,
                        DS_PLACA = ?,
                        NR_ANO = ?
                    WHERE ID_VEICULO = ?`;
  const [respota] = await connection.query(comando, [
    veiculo.tipo,
    veiculo.modelo,
    veiculo.marca,
    veiculo.placa,
    veiculo.ano,
    id,
  ]);

  return respota.affectedRows;
}

export async function deletarVeiculo(id) {
  const comando = `DELETE FROM tb_veiculo WHERE ID_VEICULO = ?`;

  const [respota] = await connection.query(comando, [id]);

  return respota.affectedRows;
}

export async function listarVeiculo() {
  const comando = `SELECT * FROM tb_veiculo`;

  const [registro] = await connection.query(comando);

  return registro;
}

export async function buscarVeiculoPorPlaca(placa) {
  const comando = `SELECT * FROM tb_veiculo WHERE DS_PLACA = ?`;

  const [registro] = await connection.query(comando, [placa]);

  return registro;
}
