import "./index.scss";

export default function InputPadrao(props) {
  return (
    <div className="formatacao-input-geral">
      <div className="input-padrao">
        <div className="cabecalho-campo">
          <label>{props?.labelCampo ?? "Campo"}</label>
        </div>
        <input
          type={props.tipoCampo ?? "text"}
          placeholder={props.placeholder ?? "Campo"}
          value={props.valor ?? ""}
          onChange={(e) => props.setValor(e.target.value)}
          min={props.valorMinimo ?? 0}
          max={props.valorMaximo ?? Number.MAX_SAFE_INTEGER}
          minLength={props.tamanhoMinimo ?? 1}
          maxLength={props.tamanhoMaximo ?? 100}
          required={props.requerido ?? false}
          readOnly={props.apenasLeitura ?? false}
        />
      </div>
    </div>
  );
}
