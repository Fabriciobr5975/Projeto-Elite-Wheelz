import connection from "../connection.js";

export async function inserirLocacao(locacao) {
  const comando = `INSERT INTO tb_locacao (
                        ID_CLIENTE, 
                        ID_VEICULO,     
                        NR_KM_RETIRADA,
                        DT_LOCACAO,
                        BT_SEGURO,   
                        DS_OBSERVACOES,
                        DS_SITUACAO,
                        NR_KM_ENTREGA,
                        DT_ENTREGA,
                        VL_TOTAL)
                    VALUES (?,?,?,?,?,?,?,?,?,?)`;
  const [respota] = await connection.query(comando, [
    locacao.cliente,
    locacao.veiculo,
    locacao.km_retirada,
    locacao.locacao,
    locacao.seguro,
    locacao.observacoes,
    locacao.situacao,
    locacao.km_entrega,
    locacao.entrega,
    locacao.total,
  ]);

  return respota.insertId;
}

export async function alterarLocacao(locacao, id) {
  const comando = `UPDATE tb_locacao SET 
                        ID_CLIENTE = ?, 
                        ID_VEICULO = ?,     
                        NR_KM_RETIRADA = ?,
                        DT_LOCACAO = ?,
                        BT_SEGURO = ?,   
                        DS_OBSERVACOES = ?,
                        DS_SITUACAO = ?,
                        NR_KM_ENTREGA = ?,
                        DT_ENTREGA = ?,
                        VL_TOTAL = ?
                    WHERE ID_LOCACAO = ?`;
  const [respota] = await connection.query(comando, [
    locacao.cliente,
    locacao.veiculo,
    locacao.km_retirada,
    locacao.locacao,
    locacao.seguro,
    locacao.observacoes,
    locacao.situacao,
    locacao.km_entrega,
    locacao.entrega,
    locacao.total,
    id,
  ]);

  return respota.affectedRows;
}

export async function deletarLocacao(id) {
  const comando = `DELETE FROM TB_LOCACAO WHERE ID_LOCACAO = ?`;

  const [respota] = await connection.query(comando, [id]);

  return respota.affectedRows;
}

export async function listarLocacao() {
  const comando = `SELECT * FROM TB_LOCACAO`;

  const [registro] = await connection.query(comando);

  return registro;
}

export async function buscarLocacaoPorVeiculo(veiculo) {
  const comando = `SELECT * FROM TB_LOCACAO WHERE ID_VEICULO = ?`;

  const [registro] = await connection.query(comando, [veiculo]);

  return registro;
}
