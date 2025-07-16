import connection from "../connection.js";

export async function inserirCliente(cliente) {
  const comando = `INSERT INTO tb_cliente (
                        NM_CLIENTE, 
                        DS_CPF,     
                        DS_TELEFONE,
                        DS_EMAIL,   
                        DS_CNH)
                    VALUES (?,?,?,?,?)`;
  const [respota] = await connection.query(comando, [
    cliente.nome,
    cliente.cpf,
    cliente.telefone,
    cliente.email,
    cliente.cnh,
  ]);

  return respota.insertId;
}

export async function alterarCliente(cliente, id) {
  const comando = `UPDATE tb_cliente SET 
                        NM_CLIENTE = ?, 
                        DS_CPF = ?,     
                        DS_TELEFONE = ?,
                        DS_EMAIL =?,   
                        DS_CNH = ?
                    WHERE ID_CLIENTE = ?`;

  const [respota] = await connection.query(comando, [
    cliente.nome,
    cliente.cpf,
    cliente.telefone,
    cliente.email,
    cliente.cnh,
    id,
  ]);

  return respota.affectedRows;
}

export async function deletarCliente(id) {
  const comando = `DELETE FROM tb_cliente WHERE id_cliente = ?`;

  const [respota] = await connection.query(comando, [id]);

  return respota.affectedRows;
}

export async function listarCliente() {
  const comando = `SELECT * FROM tb_cliente`;

  const [registro] = await connection.query(comando);

  return registro;
}

export async function buscarClientePorNome(nome) {
  const comando = `SELECT * FROM tb_cliente WHERE NM_CLIENTE LIKE ?`;

  const [registro] = await connection.query(comando, [`%${nome}%`]);

  return registro;
}
